import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/posts');
    setPosts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    await axios.post('http://localhost:5000/posts', formData);
    fetchPosts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Caption"
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <img src={post.imageUrl} alt={post.caption} width="200" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;