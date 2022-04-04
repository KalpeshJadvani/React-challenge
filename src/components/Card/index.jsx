import React from 'react';
import Image from '../Image';
import './index.css';
const Card = (props) => {
  const { imageURL, name, vote_count } = props;
  return (
    <div className="card">
      <Image imageURL={imageURL} />
      <h4 className="title">{name}</h4>
      <p>Vote Average {vote_count}</p>
    </div>
  );
};

export default Card;
