//!!!!!! please, please, please, split your code into components

// - Start with your wireframe: you build your React client based on the UI

import "./App.css";
import "./components/imageComponent/Thumbnails.css";
import Thumbnails from "./components/imageComponent/Thumbnails.jsx";
import LargeImage from "./components/largeImage/LargeImage.jsx";
import { useState, useEffect } from "react";

export default function App() {
  //state
  // - state to store API image data
  // - state to store the index value (navigate between images)
  const [imageData, setImageData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      setImageData(data);
    }
    getData();
  }, []);

  function handleThumbnailClick(idx) {
    setSelectedIndex(idx);
  }

  return (
    <>
      <h1>Gallery</h1>
      <div>
        <Thumbnails
          imageData={imageData}
          onThumbnailClick={handleThumbnailClick}
          selectedIndex={selectedIndex}
        />
      </div>

      <ul>
        <li>Other elements:</li>
        <li>A method to render all images</li>
        <li>
          An event to click on the images. The event handler here is how we
          handle switching between images
        </li>
      </ul>
      {/* //======================================================= */}
      <div>
        This is a container for my larger images! This container is
        conditionally rendered!
      </div>
      <LargeImage image={imageData[selectedIndex]} />
      <ul>
        <li>Other elements: </li>
        <li>An element to contain the larger image</li>
        <li>
          Some conditional logic to render this element once the user has
          clicked on the corresponding thumbnail
        </li>
      </ul>
    </>
  );
}
