



// first use simple if else to se the endpoint path in each of the cases
// export const endpointPath = (country, category) =>



//   `localhost:8800/books`;
export const endpointPath = (country, category) => {
  switch (category) {
    case 'science':
      return `localhost:8800/news/science`;
    case 'entertainment':
      return `localhost:8800/news/entertainment`;
    case 'sports':
      return `localhost:8800/news/sports`;
    case 'business':
      return `localhost:8800/news/business`;
    // Add more cases as needed for different categories

    case 'partners':
      return `localhost:8800/news/partners`;
    default:
      return `localhost:8800/news`;
  }
};

// export const endpointSearch = (searchQuery) =>
//   `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
// export const endpointSearch = (searchQuery) =>
//   `localhost:8800/books`;
export const endpointSearch = (searchQuery) =>
  `http://localhost:8800/news/search?query=${encodeURIComponent(searchQuery)}`;
