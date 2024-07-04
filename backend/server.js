require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

function fetchNews(url, res) {
  axios
    .get(url)
    .then((response) => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data,
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show",
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        success: false,
        message: "Faied to fetch the data from the API",
        error: error.message,
      });
    });
}

// showing all news messages --->
app.get("/all-news", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 0;
  let page = parseInt(req.query.page) || 0;
  if (pageSize === undefined || page === undefined || page <= 0) {
    page = 1;
    pageSize = 80;
  }

  let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

// top-headlines
app.options("/top-headlines", cors());
app.get("/top-headlines", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 0;
  let page = parseInt(req.query.page) || 0;
  let category = req.query.category || "business";
  if (pageSize === undefined || page === undefined || page <= 0) {
    page = 1;
    pageSize = 80;
  }
  let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

//country specific news --->
app.options("/country/:iso", cors());
app.get("/country/:iso", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 0;
  let page = parseInt(req.query.page) || 0;
  if (pageSize === undefined || page === undefined || page <= 0) {
    page = 1;
    pageSize = 80;
  }
  const country = req.params.iso; // provide The 2-letter ISO 3166-1 code of the country
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
  fetchNews(url, res);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
