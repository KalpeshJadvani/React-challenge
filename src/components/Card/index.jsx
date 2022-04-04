import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import './index.css';
const Card = (props) => {
  const { imageURL, name, vote_count, id } = props;
  return (
    <Link to={`/movie/${id}`}>
      <div className="card">
        <Image imageURL={imageURL} />
        <h4 className="title">{name}</h4>
        <p>Vote Average {vote_count}</p>
      </div>
    </Link>
  );
};

export default Card;
