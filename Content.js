// src/Content.js

import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className="App-content">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Content;
