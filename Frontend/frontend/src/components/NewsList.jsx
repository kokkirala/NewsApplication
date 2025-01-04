import React from "react";
import { useNavigate } from "react-router-dom";

const NewsList = ({ newsData, searchResults, searchQuery }) => {
  const navigate = useNavigate();

  // Handle "Read More" click event
  const onNewsClick = (newsId) => {
    // Retrieve stored user data
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      // If no user is found, show an alert asking them to register
      alert("Register to Read the Detailed News");
    } else {
      // If user is found, navigate to the detail page
      console.log("News clicked:", newsId);
      navigate(`/news/${newsId}`);
    }
  };

  const dataToDisplay = searchQuery ? searchResults : newsData; // Use search results if searchQuery exists

  if (!Array.isArray(dataToDisplay)) {
    return <p>No news available</p>; // Handle non-array or empty data gracefully
  }

  // Latest news placeholder (replace this with your actual default data)
  const latestNews = [
    { id: 1, description: "Dasari Narayana Rao (4 May 1942 – 30 May 2017) was an Indian film director..", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMM9sy08kLCLFHqEKIacxJkj68ZJd6V3hPA&s" },
    { id: 2, description: "ఈసారి మహా కుంభమేళా 2025కు వచ్చే భక్తుల కోసం రైల్వేశాఖ భారీ ఏర్పాట్లు", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95VEnvOim6HT-XV5W3-R6yXqPEGSqTEToxw&s" },
    { id: 3, description: "ఏపీ హైకోర్టులో IPS ఏబీవీకి ఊరట.. జనసైనికులకు నాగబాబు అలర్ట్..", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLStzxLqIjwz0WVEEz--Ul3qaiuA41x4zX-g&s" },
    { id: 4, description: "News Watch LIVE: తెలుగు రాష్ట్రాల్లో అసెంబ్లీ సీట్లు...", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zOakr7lTMNdyivZME16iqhbnQdSP2OpSGg&s" },
    { id: 5, description: "JC Prabhakar Reddy Comments on Madhavi Latha..", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7nW7k3HA7L9x7suoHE4JKgoeeA1Vho9FNQ&s" },
    { id: 6, description: "LIVE:Cabinet Meeting Chairs By CM Revanth Reddy..", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwl2f-onxt2PzxHSb-lHATqnsY22sFZw2-A&s" },
    { id: 7, description: "Latest Business News in Telugu: ఎకనామిక్స్, ఫైనాన్సియల్ న్యూస్,", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeJnXAtHGlVEMMzlPFujCxM_Fmygg622qSg&s" },
    { id: 8, description: "Telugu News: Latest Telugu News,To save the farmer from Politics 'Game Changer'", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWpu6hWnf7Nfj-41cEeUWvLeEsmtOOLKZ7g&s" },
    { id: 9, description: "News: Karun Nayak as created the Record as one of the Great Cricketer in the World..", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIEWu1G6HS0hGTE5qTDoLwPbIWg4_MrtN2g&s" },
    { id: 10, description: "Telugu Post | Online Telugu News | Latest News in...", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRPTM_aaJelRpMXtWsAiMs5D-qDXxOybU7A&s" },
    { id: 11, description: "Latest Telugu News, తెలుగు వార్తలు, News in Telugu,...", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZQufsQI6Ci8lS6isJgKcXS4zi4QdTaHb8A&s" },
    { id: 12, description: "News:Tragedy in Tourism at WaterFalls...", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw4_j497i7Ri1hxR92wgMqYY3r4liCasoDg&s" },
  ];

  // Inline CSS styles
  const styles = {
    newsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },
    newsItem: {
      width: "30%",
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    newsImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
    latestNews: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",  // Three columns
      gap: "30px",
      padding: "50px",
      justifyContent: "space-between", // Align latest news items side by side
    },
    latestNewsItem: {
      width: "100%",
      flexShrink: "0",
    },
    button: {
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    logoutButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div className="news-list" style={styles.newsList}>
      {dataToDisplay.length > 0 ? (
        // Display the search results or fetched news data
        dataToDisplay.map((newsItem) => (
          <div key={newsItem.id} className="news-item" style={styles.newsItem}>
            <h2>{newsItem.title}</h2>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" style={styles.newsImage} />
            <p>{newsItem.description}</p>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              onClick={() => onNewsClick(newsItem.id)}
            >
              Read More
            </button>
          </div>
        ))
      ) : (
        // Display latest news side by side when there are no data or search results
        <div className="latest-news" style={styles.latestNews}>
          {latestNews.map((newsItem) => (
            <div key={newsItem.id} className="latest-news-item" style={styles.latestNewsItem}>
              <h2>{newsItem.title}</h2>
              <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" style={styles.newsImage} />
              <p>{newsItem.description}</p>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                onClick={() => onNewsClick(newsItem.id)}
              >
                ReadMore
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
