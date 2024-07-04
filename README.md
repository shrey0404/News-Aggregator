# News Aggregator Website

## Overview

The News Aggregator Website is a comprehensive platform that fetches and displays news from various sources using NewsAPI. It is designed to provide users with access to all news, top headlines in different segments, and country-wise news aggregation. The website is built using the MERN stack (MongoDB, Express, React, Node.js).

![news](https://github.com/shrey0404/News-Aggregator/assets/121557964/73360c37-53cb-4af6-83fa-b9563106ba06)

## Features

- **All News**: Displays news from multiple sources globally.
- **Top Headlines**: Showcases top headlines across various segments (e.g., Technology, Sports, Entertainment).
- **Country-wise News**: Aggregates news specific to different countries.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **News API**: NewsAPI for fetching news data

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator

1. **Install Dependencies**

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install


1. **Environment Variables**

Create a .env file in the server directory with the following variables:

   ```bash
   PORT=5000
NEWS_API_KEY=your_news_api_key
MONGO_URI=your_mongodb_connection_string
```
4 **Run the application**

   ```bash
   cd server
node server.js

cd client
npm start

