import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const handleButtonClick = () => {
    if (count < 1 || count > 1000) {
      alert('Please enter a number between 1 and 20');
    } else {
      const newImages = [];
      for (let i = 0; i < count; i++) {
        newImages.push(`https://picsum.photos/200/300?random=${i}`);
      }
      setImages(newImages);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Image Gallery</h1>
      </header>

      <div className="input">
        <label>Enter the number of Images</label>
        <input
          type="number"
          value={count}
          onChange={handleInputChange}
          placeholder="0"
          min="1"
          max="20"
        />
      </div>

      <div className="button">
        <button onClick={handleButtonClick}>Get Images</button>
      </div>

      <div className="img-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Random ${index}`} />
        ))}
      </div>
    </div>
  );
}


export default App;
