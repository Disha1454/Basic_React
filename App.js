// src/App.js

import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content title="About Us" text="This is a simple React website with custom styling and components." />
        <Content title="Our Mission" text="Our mission is to create high-quality web applications using React." />
        <Content title="Contact" text="Feel free to reach out to us at contact@myreactwebsite.com." />
      </main>
      <Footer />
    </div>
  );
}

export default App;
