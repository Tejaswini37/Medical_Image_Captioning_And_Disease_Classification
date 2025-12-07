import React, { useState } from 'react';
import axios from 'axios';
import './model.css';

const LLMpage = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCaption('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predictnlp", formData);
      setCaption(res.data.caption);
    } catch (err) {
      console.error(err);
      alert("Error generating caption");
    }

    setLoading(false);
  };

  const resetUpload = () => {
    setImage(null);
    setPreview(null);
    setCaption('');
  };

  return (
    <div className={`page-container ${caption ? "reduced-gap" : ""}`}>
      <div className="card">

        <h1>Image Captioning</h1>

        {!caption && (
          <form onSubmit={handleSubmit}>
            <label className="upload-box">
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <span>Click to Upload X-ray Image</span>
            </label>

            <button type="submit" className="primary-btn">
              {loading ? "Generating..." : "Upload & Predict"}
            </button>
          </form>
        )}

        {preview && (
          <div className="preview">
            <h3>Preview:</h3>
            <img src={preview} alt="Uploaded" className="preview-img" />
          </div>
        )}

        {caption && (
          <>
            <div className="caption-box">
              <strong>Caption:</strong> {caption}
            </div>

            <button className="upload-again-btn" onClick={resetUpload}>
              Upload Another Image
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default LLMpage;
