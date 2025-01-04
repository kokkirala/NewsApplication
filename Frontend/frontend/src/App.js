// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NewsDetail from "./pages/NewsDetail";
import NewsList from "./components/NewsList"; // Assuming you have NewsList component

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);  // Store search results
  const [newsData, setNewsData] = useState([]); // Store general news data

  const handleNewsClick = (newsId) => {
    console.log("News clicked:", newsId);
    // Add navigation logic if required
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in=${searchQuery}`);
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []); // Ensure data is an array
        if (searchQuery) {
          setSearchResults(data);  // Update searchResults if there's a search query
        } else {
          setSearchResults([]);  // Clear search results when query is empty
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]); // Set to empty array in case of an error
        setSearchResults([]); // Set search results to empty on error
      }
    };

    fetchNews();
  }, [searchQuery]);

  return (
    <Router>
      <Navbar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setSearchResults={setSearchResults}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={<Home selectedCategory={selectedCategory} searchQuery={searchQuery} onNewsClick={handleNewsClick} />}
        />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route 
          path="/" 
          element={<NewsList 
            newsData={newsData} 
            searchResults={searchResults}  // Pass searchResults to NewsList
            searchQuery={searchQuery} // Pass searchQuery to NewsList
          />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
