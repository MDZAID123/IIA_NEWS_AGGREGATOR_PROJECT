import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";
import  PartnerItem from "../PartnerItem/PartnerItem";

function News(props) {
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;

  const updatenews = async () => {
    try {
      // const response = await axios.get(endpointPath(country, category));



      let endp="http://localhost:8800/news";
      

      switch(category){
        case "science":
          endp="http://localhost:8800/news/science";
          break;
        case "business":
          endp="http://localhost:8800/news/business";
          break;
        case "entertainment":
          endp="http://localhost:8800/news/entertainment";
          break;

        case "sports":
          endp="http://localhost:8800/news/sports";
          break;

        case "partners":
          endp="http://localhost:8800/news/partners";
          break;

        default:
          break;
      }
      



       const response = await axios.get(endp);

       console.log(response.data);
       console.log(category);

      setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  updatenews();
  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Header>{header(capitaLize(category))}</Header> */}
          <Container>
            {articles[0].title?
            (<Header>{header(capitaLize(category))}</Header>):(
              <Header>Our partners</Header>

            )}
            <Row>
              
              {articles.slice(0, Math.min(30, articles.length)).map((element) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    
                    {


                      
                    element.frequency? (
                      <PartnerItem
                      source={element.source}
                      frequency={element.frequency}
                      

                      />

                    ):(
                    <NewsItem
                      title={element.title}
                      description={element.snippet}
                      published={element.date}
                      channel={element.source}
                      alt="News image"
                      publishedAt={element.source}
                      image={
                        element.image === null ? NullImage : element.image
                      }
                      urlNews={element.url}
                    />)
              }
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;
