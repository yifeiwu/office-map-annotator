import React from 'react';

const ImageWithAnnotations = ({ imageUrl, points, onAddPoint }) => {
  const handleImageClick = (e) => {
    const image = e.target;
    const rect = image.getBoundingClientRect(); // Get the image's bounding box relative to the viewport
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate relative x in percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate relative y in percentage

    const description = prompt('Enter description for this point:');
    if (description) {
      onAddPoint({ x, y, description });
    }
  };

  return (
    <div className="image-container">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="uploaded"
          onClick={handleImageClick}
          className="annotated-image"
        />
      )}
      {points.map((point, index) => (
        <div
          key={index}
          className="annotation"
          style={{ top: `${point.y}%`, left: `${point.x}%` }}
        >
          <div className="point-marker" />
          <div className="point-description">{point.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageWithAnnotations;
