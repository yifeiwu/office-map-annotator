import React, { useState, useEffect } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageWithAnnotations from './components/ImageWithAnnotations';
import PointsListJson from './components/PointsListJson';
import PointsDescriptionsList from './components/PointsDescriptionsList';
import './App.css';
import roomImageUrl from './assets/room-map.png?url';
import roomsJsonUrl from './assets/room-annotations.json?url';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [points, setPoints] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const initializeApp = async () => {
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

  useEffect(() => {
    initializeApp();
  }, []);

  const handleAddPoint = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  const handlePointsChange = (updatedPoints) => {
    setPoints(updatedPoints);
  };
  
  const handleListFocusChange = (idx) => {
    setFocusedIndex(idx);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Office Map Annotator</h1>
        <ol className="instructions">
          <li>Choose a map (picture) to annotate</li>
          <li>Click the map to add points of interest</li>
          <li>Edit or save points from the list</li>
        </ol>
      </header>

      <div className="controls">
        <ImageUploader onImageUpload={setImageUrl} />
      </div>

      <div className="layout">
        <main className="canvas">
          <ImageWithAnnotations imageUrl={imageUrl} points={points} onAddPoint={handleAddPoint} focusedIndex={focusedIndex} />
        </main>
        <aside className="sidebar">
          <PointsDescriptionsList points={points} onFocusIndexChange={handleListFocusChange} />
          <div style={{ height: 12 }} />
          <PointsListJson points={points} onPointsChange={handlePointsChange} />
        </aside>
      </div>
    </div>
  );
};

export default App;
