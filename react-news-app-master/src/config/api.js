const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "b01072db0b9dbb30a884bf020a9a0611";



// first use simple if else to se the endpoint path in each of the cases
// export const endpointPath = (country, category) =>



//   `localhost:8800/books`;
export const endpointPath = (country, category) => {
  switch (category) {
    case 'science':
      return `localhost:8800/books/science`;
    case 'entertainment':
      return `localhost:8800/books/entertainment`;
    case 'sports':
      return `localhost:8800/books/sports`;
    case 'business':
      return `localhost:8800/books/business`;
    // Add more cases as needed for different categories

    case 'partners':
      return `localhost:8800/books/partners`;
    default:
      return `localhost:8800/books`;
  }
};

// export const endpointSearch = (searchQuery) =>
//   `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
// export const endpointSearch = (searchQuery) =>
//   `localhost:8800/books`;
export const endpointSearch = (searchQuery) =>
  `http://localhost:8800/books/search?query=${encodeURIComponent(searchQuery)}`;
