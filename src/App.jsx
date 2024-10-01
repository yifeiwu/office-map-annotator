import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageWithAnnotations from './components/ImageWithAnnotations';
import PointsList from './components/PointsList';
import './App.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [points, setPoints] = useState([]);

  const handleAddPoint = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  const handlePointsChange = (updatedPoints) => {
    setPoints(updatedPoints);
  };

  return (
    <div className="app">
      <h1>Office Map Annotator</h1>
      <p>
        <ol>
          <li>Choose a map(picture) to annotate</li>
          <li>Click on the map to add points of interest</li>
          <li>You can save or edit the list of points from the textbox</li>
        </ol>
      </p>
      <ImageUploader onImageUpload={setImageUrl} />
      <ImageWithAnnotations imageUrl={imageUrl} points={points} onAddPoint={handleAddPoint} />
      <PointsList points={points} onPointsChange={handlePointsChange} />
    </div>
  );
};

export default App;
