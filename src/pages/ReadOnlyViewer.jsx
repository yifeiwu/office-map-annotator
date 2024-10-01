import React, { useEffect, useState } from 'react';
import ImageWithAnnotations from '../components/ImageWithAnnotations';
import PointsDescriptionsList from '../components/PointsDescriptionsList';
import roomImageUrl from '../assets/room-map.png?url';
import roomsJsonUrl from '../assets/room-annotations.json?url';

const ReadOnlyViewer = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [points, setPoints] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    const init = async () => {
      setImageUrl(roomImageUrl);
      try {
        const response = await fetch(roomsJsonUrl);
        const data = await response.json();
        const initialPoints = Array.isArray(data)
          ? data
          : (data && Array.isArray(data.points))
            ? data.points
            : [];
        setPoints(initialPoints);
      } catch (error) {
        console.error('Failed to load rooms.json:', error);
      }
    };
    init();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Office Map Viewer</h1>
      </header>
      <div className="layout">
        <main className="canvas">
          <ImageWithAnnotations imageUrl={imageUrl} points={points} readOnly={true} focusedIndex={focusedIndex} />
        </main>
        <aside className="sidebar">
          <PointsDescriptionsList points={points} onFocusIndexChange={setFocusedIndex} />
        </aside>
      </div>
    </div>
  );
};

export default ReadOnlyViewer;
