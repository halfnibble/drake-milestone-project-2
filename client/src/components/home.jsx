import React from 'react';
import './home.css'; // Import your CSS for styling
import { Link } from 'react-router-dom';

import backgroundImage from './home-background.jpg';

const Home = () => {
  const appleLaptops = [
    {
      name: 'MacBook Pro 13"',
      display: '13-inch Retina display',
      processor: 'Apple M1 chip',
      price: '$1,299',
    },
    {
      name: 'MacBook Pro 16"',
      display: '16-inch Retina display',
      processor: 'Intel Core i9',
      price: '$2,399',
    },
  ];

  return (
    <div className="apple-homepage">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/macbooks">MacBooks</Link></li>
          </ul>
        </nav>
      </header>


      <div
        className="main-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <section className="main-content">
          <h1>Apple Mac Laptops</h1>
          <ul className="laptop-list">
            {appleLaptops.map((laptop, index) => (
              <li key={index} className="laptop-item">
                <h2>{laptop.name}</h2>
                <p>Display: {laptop.display}</p>
                <p>Processor: {laptop.processor}</p>
                <p>Price: {laptop.price}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
