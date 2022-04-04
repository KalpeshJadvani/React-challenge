import React from 'react';
import './index.css';
const NoData = (props) => {
  return (
    <div className="noData">
      <h1>{props.msg}</h1>
    </div>
  );
};

export default NoData;
