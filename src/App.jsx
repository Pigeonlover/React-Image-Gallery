//!!!!!! please, please, please, split your code into components

// - Start with your wireframe: you build your React client based on the UI

import "./App.css";
import "./components/thumbnails/Thumbnails.css";
import "./components/largeImage/LargeImage.css";
import Thumbnails from "./components/thumbnails/Thumbnails.jsx";
import LargeImage from "./components/largeImage/LargeImage.jsx";
import { useState, useEffect } from "react";

export default function App() {
  //state
  // - state to store API image data
  // - state to store the index value (navigate between images)
  const [imageData, setImageData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      const data = await response.json();
      setImageData(data);
    }
    getData();
  }, []);

  function handleThumbnailClick(index) {
    setSelectedIndex(index);
  }

  return (
    <main>
      <div className="thumbnails-container">
        <Thumbnails
          imageData={imageData}
          onThumbnailClick={handleThumbnailClick}
          selectedIndex={selectedIndex}
        />
      </div>

      {/* //======================================================= */}
      <div className="large-image-container">
        <LargeImage image={imageData[selectedIndex]} />
      </div>
    </main>
  );
}
