export default {
  HOST: process.env.NODE_HOST || "localhost", // Define your host from "./package.json"
  PORT: process.env.PORT || 8080,
  API_URL: "https://jsonplaceholder.typicode.com",
  APP: {
    htmlAttributes: { lang: "en" },
    title: "Normal Online Judge",
    titleTemplate: "Normal Online Judge - %s",
    meta: [
      {
        name: "description",
        content: "The best react universal starter boilerplate in the world.",
      },
    ],
  },
};
