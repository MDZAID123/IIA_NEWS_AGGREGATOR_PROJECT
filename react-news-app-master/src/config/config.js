import moment from "moment";

export const navbarBrand = "";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";

export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/categories/general" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  
  { nav: "entertainment", page: "/categories/entertainment" },
 
  {nav:"Our partners",page:"/partners"},
];

export const router = [

  {path:"/partners",key:"partners",category:"partners",country:"us"},
  { path: "/", key: "general", category: "general", country: "us" },
  { path: "/categories/general", key: "general", category: "general", country: "us" },
  { path: "/categories/business", key: "business", category: "business", country: "us" },
  { path: "/categories/sports", key: "sports", category: "sports", country: "us" },
  { path: "/categories/science", key: "science", category: "science", country: "us" },

  { path: "/categories/entertainment", key: "entertainment", category: "entertainment",country: "us" },
 
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
