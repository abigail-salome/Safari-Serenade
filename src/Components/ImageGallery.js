import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleZoom = (image) => {
    setZoomedImg(image);
  };

  return (
    <div>
      {zoomedImg && (
        <div>
          <img src={zoomedImg} alt="Zoomed" />
          <button onClick={() => setZoomedImg(null)}>Close</button>
        </div>
      )}
      {images.map(image => (
        <img
          key={image}
          src={image}
          alt="Destination"
          onClick={() => handleZoom(image)}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
