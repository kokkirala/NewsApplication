// Navbar.js
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ searchQuery, setSearchQuery, setSearchResults, setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("All");
  const navigate = useNavigate();
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedCategoryState(category); // Update state locally for highlighting
  };
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove the registered user from localStorage
    alert("You have been logged out.");
    navigate("/"); // Optionally navigate to the login or home page
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    try {
      // Example API endpoint (replace with your actual API URL)
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in`, {
        params: {
          q: searchQuery, // search query
          apiKey: "844566f5e0f444569ce5682e341e3cd8", // Replace with your API key
        },
      });
      setSearchResults(response.data.articles); // Update state with search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>News App</h1>
          <div style={styles.categorySelector}>
            {["All", "Business", "Cinema", "Health", "Political", "Sports", "Technology"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                style={{
                  ...styles.categoryButton,
                  backgroundColor:
                    selectedCategory === category ? "#007bff" : "transparent",
                  color: selectedCategory === category ? "white" : "black",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.rightSection}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key
          />
          <ul style={styles.navLinks}>
            <li><Link to="/login" style={styles.link}>Login</Link></li>
            <li><Link to="/register" style={styles.link}>Register</Link></li>
            <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    flexWrap: "wrap",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  categorySelector: {
    display: "flex",
    gap: "10px",
  },
  categoryButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  searchBar: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    color: "black",  // Ensure text color is black or visible
    backgroundColor: "white",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;
