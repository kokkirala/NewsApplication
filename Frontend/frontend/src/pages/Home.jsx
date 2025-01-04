import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import NewsList from "../components/NewsList";
import './Home.css';

const Home = ({ selectedCategory, searchQuery,onNewsClick }) => {
  const [news, setNews] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const newsData = [
      {
        id: 1,
        title: "Breaking News 1",
        description: "I have come here to pay tribute and respect to former PM Dr Manmohan Singh. We have always held him in high regard and respect for his leadership...",
        category: "All",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxmUp1TeJQGcCEQUtPxdvP9Tip8j6alc_wA&s",
      },
      {
        id: 2,
        title: "Breaking News 2",
        description: "Allu Arjun appeared before the court virtually in the Sandhya Theatre stampede case. His bail has been posted to December 30.",
        category: "Cinema",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_j4a9a_500svEsaKgJEbc49sbV8CrL1ldQ&s",
      },
      {
        id: 3,
        title: "Breaking News 3",
        description: "A day after Parliament’s Monsoon Session drew to a close,amid fire and brimstone,",
        category: "Political",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XA_gf89DSp6Urd0aKinRT7b-_ne8HLzOrw&s",
      },
      {
        id: 4,
        title: "Breaking News 4",
        description: "IND vs AUS 4th Test Day 3 Live Cricket Score, India vs Australia Test Live Score,",
        category: "Sports",
        imageUrl: "https://images.indianexpress.com/2024/12/IND-vs-AUS-Boxing-Day-Test-Day-3.jpg?w=316",
      },
      {
        id: 5,
        title: "Breaking News 5",
        description: "Vande Bharat sleeper hits 180 kmph during trials! Check viral video of new...",
        category: "Business",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoKOo3-lZzW54fFoLkYrxJin0lSoxouVzaQ&s",
      },
      {
        id: 6,
        title: "Breaking News 6",
        description: "Don’t Guess. Test.” Is the slogan for a campaign underway to inform people with lung cancer and...",
        category: "Health",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCaDyT_6ECRePJpeIMsy3rrEBuLMPSuQuZg&s",
      },
      {
        id: 7,
        title: "Breaking News 7",
        description: "Hardware components can malfunction, software bugs can surface, network connections can falter, and ... ",
        category: "Technology",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlR6M0ThfAAeS_Vgw0QznuKX-tJnU2trB6Fw&s",
      },
      {
        id: 8,
        title: "Breaking News 8",
        description: "Klinkaara watched Ram Charan first time in the Television.",
        category: "Cinema",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNltJQ-ER-adf3BCdnZjSBrC_TPmunnOvug&s",
      },
      {
        id: 9,
        title: "Breaking News 9",
        description: "Today in Politics: Karnataka BJP begins march against ‘corrupt’ Siddaramaiah govt;",
        category: "Political",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLkzj6OEufZLfX7PaOgariV_mIMQDJIFGMw&s",
      },
      {
        id: 10,
        title: "Breaking News 10",
        description: "IND vs AUS 5th Test Day 2 Live Cricket Score,",
        category: "Sports",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsB-81Ez-gcenCxnkNFNe5kXh1-LC28kGGw&s",
      },
      {
        id: 11,
        title: "Breaking News 11",
        description: "In this Business English News lesson we look at business English vocabulary related to the economy, particularly the relationship between inflation and interest rates.",
        category: "Business",
        imageUrl: "https://1finance.co.in/magazine/wp-content/uploads/2023/07/white-inflation-text-chart-business-concept-3d-rendering-scaled.jpg",
      },
      {
        id: 12,
        title: "Breaking News 12",
        description: "The True Facts Behind RFK's Health Policy Hit List",
        category: "Health",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e0KvObV2zG9bv6G_ijl-d2HUdR8f-6jiww&s",
      },
      {
        id: 13,
        title: "Breaking News 13",
        description: "The future of news is in AI platforms | Globant Blog",
        category: "Technology",
        imageUrl: "https://media.wcnc.com/assets/CCT/images/ef4bfeb6-f251-4a66-bb81-25680b833ece/ef4bfeb6-f251-4a66-bb81-25680b833ece_1920x1080.jpg",
      },
    ];
    setNews(newsData);
  }, []);

  const filteredNews = news.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <NewsList newsData={filteredNews} onNewsClick={onNewsClick} />
    </div>
  );
};

export default Home;
