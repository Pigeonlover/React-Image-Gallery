//
import "./App.css";
import "./components/thumbnails/Thumbnails.css";
import "./components/largeImage/LargeImage.css";
import Thumbnails from "./components/thumbnails/Thumbnails.jsx";
import LargeImage from "./components/largeImage/LargeImage.jsx";
import { useState, useEffect } from "react";

export default function App() {
  // State
  // - state to store API image data
  // - state to store the index value (to navigate between images)
  const [imageData, setImageData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetching data from the Unsplash API
  // API link and secret access key hidden in .env file
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      const data = await response.json();
      setImageData(data);
    }
    getData();
  }, []);

  // Image index
  function handleThumbnailClick(index) {
    setSelectedIndex(index);
  }

  return (
    <main>
      <div className="thumbnails-container">
        <Thumbnails
          imageData={imageData}
          onThumbnailClick={handleThumbnailClick}
          selectedIndex={selectedIndex} // Selected index set in state
        />
      </div>

      <div className="large-image-container">
        {/* Optional chaining (?.) to more easily access deeply nested API data (*cough* Unsplash's... *cough*). Helps with not throwing an error if nested properties are null or undefined */}
        <LargeImage image={imageData.results?.[selectedIndex]} />
      </div>
    </main>
  );
}
