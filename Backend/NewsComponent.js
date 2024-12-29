import React, { useState } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [newsContent, setNewsContent] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to be sent to the backend
    const newContent = {
      title: newsContent.title,
      description: newsContent.description
    };

    try {
      // Send the POST request to backend
      const response = await axios.post('http://localhost:5000/api/updateContent', newContent);

      // Handle the response (i.e., updated content)
      if (response.status === 200) {
        console.log('Updated Content:', response.data.updatedContent);
        // Optionally, update local state or display success message
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <div>
      <h2>Update News Content</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newsContent.title}
          onChange={(e) => setNewsContent({ ...newsContent, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newsContent.description}
          onChange={(e) => setNewsContent({ ...newsContent, description: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewsComponent;
