import React, { useEffect, useRef } from 'react';

const ImageWithAnnotations = ({ imageUrl, points, onAddPoint, focusedIndex = -1, readOnly = false }) => {
  const annotationRefs = useRef([]);
  annotationRefs.current = [];

  const handleImageClick = (e) => {
    if (readOnly) return;
    const image = e.target;
    const rect = image.getBoundingClientRect(); // Get the image's bounding box relative to the viewport
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate relative x in percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate relative y in percentage

    const description = prompt('Enter description for this point:');
    if (description) {
      onAddPoint({ x, y, description });
    }
  };

  const setAnnotationRef = (el) => {
    if (el) {
      annotationRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (
      typeof focusedIndex === 'number' &&
      focusedIndex >= 0 &&
      focusedIndex < annotationRefs.current.length
    ) {
      const el = annotationRefs.current[focusedIndex];
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }
  }, [focusedIndex]);

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
          ref={setAnnotationRef}
          className={`annotation${index === focusedIndex ? ' focused' : ''}`}
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
