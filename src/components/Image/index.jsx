import React from 'react';
import './index.css';
const Image = ({ imageURL }) => {
  return <img alt="Movie Image" src={imageURL} className="image" />;
};

export default Image;
