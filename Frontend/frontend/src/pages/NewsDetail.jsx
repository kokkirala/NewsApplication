import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Consolidated imports
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [newsItem, setNewsItem] = useState(null); // Properly initialized state

  useEffect(() => {
    // Fetch the detailed news item from the API (use the id parameter)
    const newsData = [
      {
        _id: 1,
        title: "Breaking News 1",
        description: "I have come here to pay tribute and respect to former PM Dr Manmohan Singh. We have always held him in high regard and respect for his leadership...",
        content: "Dr Manmohan Singh, former Prime Minister passed away at 9.51 PM on December 26, 2024 at AllMS Hospital, New Delhi. It has been decided by the Government that State funeral will be accorded to Dr Manmohan Singh. The funeral will take place at 11:45 AM on December 28, 2024 at Nigambodh Ghat, New Delhi. The Ministry of Defence is requested to make arrangements for State funeral will full military honours.",
        imageUrl: "https://static.toiimg.com/thumb/imgsize-1290888,msid-116689984,width-400,resizemode-4/116689984.jpg",
      },
      {
        _id: 2,
        title: "Breaking News 2",
        description: "Allu Arjun appeared before the court virtually in the Sandhya Theatre stampede case. His bail has been posted to December 30.",
        content: "Actor Allu Arjun, appeared virtually before a local court on Friday in a hearing about his bail in the Sandhya Theatre stampede case. The actor is an accused in the case booked over the death of a woman in a stampede in Hyderabad during the premiere of his latest film Pushpa 2: The Rule.",
        imageUrl: "https://img.republicworld.com/tr:w-236,h-132,q-75,f-auto/all_images/a-file-photo-of-allu-arjun-1734864402668-16_9.webp",
      },
      {
        _id: 3,
        title: "Breaking News 3",
        description: "A day after Parliament’s Monsoon Session drew to a close,amid fire and brimstone,",
        content: "and a no-confidence motion that went along expected lines – with Manipur perhaps none the wiser – both Prime Minister Narendra Modi and Congress leader Rahul Gandhi will be hitting the ground Saturday.Modi is scheduled to visit Sagar district in poll-bound Madhya Pradesh to lay the foundation stone for a Rs 100-crore temple dedicated to 14th-century mystic poet and social reformer Sant Ravidas, followed by a public meeting.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHMSRmmhqEQA_lo6PDwiRJDieng08SmB94g&s",
      },
      {
        _id: 4,
        title: "Breaking News 4",
        description: "IND vs AUS 4th Test Day 3 Live Cricket Score,",
        content: "The onfield decision stays. Lyon knew he was a goner and started to walk as he signalled the 'T'. Bumrah collected his cap from the umpire and started to make his way to the pavilion.",
        imageUrl: "https://images.indianexpress.com/2024/12/NKR-MCG.jpg?w=316",
      },
      {
        _id: 5,
        title: "Breaking News 5",
        description: "Vande Bharat sleeper hits 180 kmph during trials! Check viral video of new...",
        content: "Vande Bharat sleeper hits 180 kmph in trials! Railway Minister Ashwini Vaishnaw has shared a video of the Vande Bharat sleeper train trials which shows the train hitting a peak speed of 180 kmph during its trials.",
        imageUrl: "https://static.toiimg.com/thumb/msid-116909542,imgsize-87134,width-400,resizemode-4/116909542.jpg",
      },{
        _id: 6,
        title: "Breaking News 6",
        description: "Don’t Guess. Test.” Is the slogan for a campaign underway to inform people with lung cancer and their physicians to about comprehensive genomic testing and its potential to expand ",
        content: "treatment options for the patient.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjnm9Tfb-KvRMBeOdx-HkzHUDx8NO0_hDg&s",
      },{
        _id: 7,
        title: "Breaking News 7",
        description: "Hardware components can malfunction, software bugs can surface, network connections can falter, and As new trends and technologies emerge,IT professionals also feel a huge shift in their jobs and opportunities. They have realized that their roles in any organization will remain crucial for years.",
        content: "However, they need to learn, unlearn, and relearn to make a promising career. They have to stay updated with everything that is latest in technology",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToypAc4_8mKHGsIpV7DOW4HsLuTOVy4LKspQ&s",
      },
      {
        _id: 8,
        title: "Breaking News 8",
        description: "Klinkaara watched Ram Charan first time in the Television.",
        content: "Ram Charan (Ram Charan) wife Upasana (Upsana). Recently she shared a clean video that stole the hearts of netizens. In this, Papa was seen watching 'RRR: Behind & Beyond' starring Ramcharan. When Charan appeared.. she was pointing at the screen and kissing and smiling. Upasana said that Kleenkara was very happy to see her father on TV for the first time.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8Isl9pSS0mBnWOWRTPhgQz_m7Dmv5BNBug&s",
      },
      {
        _id: 9,
        title: "Breaking News 9",
        description: "Today in Politics: Karnataka BJP begins march against ‘corrupt’ Siddaramaiah govt;",
        content: "On Friday, BJP Karnataka president BY Vijayendra said the party was starting a seven-day padayatra (foot march) from Bengaluru to Mysuru on Saturday to take the fight against the Congress government to its “logical end”.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8HZsPTF5kA6q1vru8SSm8QZkguNLd-UIGQ&s",
      },
      {
        _id: 10,
        title: "Breaking News 10",
        description: "IND vs AUS 5th Test Day 2 Live Cricket Score,",
        content: "India vs Australia Test Live Score Online Today Match: Earlier Rishabh Pant has scored a blistering 61 to help India inject some momentum in the second innings. Australia responding to India's 185 runs in the first innings were bowled out for 181 runs",
        imageUrl: "https://static.tnn.in/thumb/msid-116923888,updatedat-1735946407650,thumbsize-77304,width-1280,height-720,false/116923888.jpg",
      },
      {
        _id: 11,
        title: "Breaking News 11",
        description: "In this Business English News lesson we look at business English vocabulary related to the economy, particularly the relationship between inflation and interest rates.",
        content: "Government spending throughout 2021 was a boon to the business sector. Jobs returned, production rose, and many countries ended the year on a positive note. But growth – and years of low interest rates – has raised the specter of inflation, or rising prices.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aeU1GbQGnTDTDUbh0KC3t3d4ub3IuI8Yow&s",
      },{
        _id: 12,
        title: "Breaking News 12",
        description: "The True Facts Behind RFK's Health Policy Hit List",
        content: "Your body is a machine. Here's how to take care of every part of it—from protecting your heart to injury-proofing your joints—for the long haul.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbFUb-acMyS1JjHNMHKVicuozE9LQPB6d6w&s",
      },{
        _id: 13,
        title: "Breaking News 13",
        description: "The future of news is in AI platforms | Globant Blog",
        content: "Efforts continued to pursue AI safety regulations in May with the second Global AI Summit, during which the U.K. and the Republic of Korea secured a commitment from 16 global AI tech companies to a set of safety outcomes building on that agreement.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCV0fbz2WILYvKMYOQJvoAb6QyIl6-R5ZUw&s",
      },
    ];

    // Simulate fetching news by ID
    const selectedNews = newsData.find((item) => item._id === parseInt(id));
    setNewsItem(selectedNews);
  }, [id]);

  if (!newsItem) {
    return (
      <p>
        No news article found. Go back to the <Link to="/home">Home</Link>.
      </p>
    );
  }

  return (
    <div className="news-detail">
      <h2>{newsItem.title}</h2>
      <center><img src={newsItem.imageUrl} alt={newsItem.title} /></center>
      <p>{newsItem.description}</p>
      <p>{newsItem.content}</p>
      <Link to="/home">
        <button className="back-button">Back to News List</button>
      </Link>
    </div>
  );
};

export default NewsDetail;
