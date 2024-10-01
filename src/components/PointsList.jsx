import React from 'react';

const PointsList = ({ points, onPointsChange }) => {
  const handleTextAreaChange = (e) => {
    try {
      const parsedPoints = JSON.parse(e.target.value);
      onPointsChange(parsedPoints);
    } catch (error) {
      alert('Invalid format! Please ensure the input is valid JSON.');
    }
  };

  return (
    <div className="points-list">
      <p>Points of Interest:</p>
      <textarea
        value={JSON.stringify(points, null, 2)}
        onChange={handleTextAreaChange}
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default PointsList;
