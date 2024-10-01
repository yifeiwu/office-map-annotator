import React, { useState } from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const [fileName, setFileName] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (evt) => {
        onImageUpload(evt.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <label className="btn" htmlFor="file-input">Upload map</label>
      <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
      {fileName && <span className="filename">{fileName}</span>}
    </div>
  );
};

export default ImageUploader;
