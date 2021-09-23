import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import logo from './pixabaylogo.png';

const App = () => {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_API;

  const onSearchSubmit = async (value) => {
    try {
      const params = {
        key: ApiKey,
        q: value
      };
      const response = await axios.get("https://pixabay.com/api/", { params });
      setImages(response.data.hits);
      if (response.data.total === 0) {
        alert('お探しの画像はありません');
      }
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <div className='ui container' style={{ marginTop: '20px' }}>
      <img src={logo} alt="pixabay-logo" className="pixabay-logo" />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
