import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import PartnerDetails from "./PartnerDetails/PartnerDetails";
import { card, img, btn, text } from "./index";
import "./style.css"

function PartnerItem(props) {
  const {  source ,frequency } = props;

  return (
    <>
      <Card style={card} >
        {/* <Card.Img style={img} variant="top" src={imageUrl} alt={alt} /> */}
        <Card.Body>
          <Card.Title>{source}</Card.Title>
          {/* <Card.Text style={text}>{description}</Card.Text> */}
          <PartnerDetails channel={source} published={frequency} />
          {/* <Button href={urlNews} target="_blank" style={btn}>
            Read more →
          </Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

PartnerItem.propTypes = {
  // imageUrl: PropTypes.string,
  source: PropTypes.string,
  frequency: PropTypes.string,

};

export default PartnerItem;
