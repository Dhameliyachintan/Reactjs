import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Check if file is selected
    if (file) {
      // Check if file type is an image
      if (file.type.startsWith('image/')) {
        // Set the selected image to the state
        setImage(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleImageUpload = () => {
    // Perform upload logic here, e.g., send image to server
    // In this example, we're just logging the image details
    console.log('Uploading image:', image);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <button onClick={handleImageUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
