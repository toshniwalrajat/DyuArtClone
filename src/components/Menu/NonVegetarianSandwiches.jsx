// src/components/Menu/NonVegetarianSandwiches.jsx
import React from 'react';
import './HotBeverages.css'; // reuse your existing menu styles

const NonVegetarianSandwiches = () => {
  const items = [
    {
      name: 'Chicken Melt Sandwich',
      description: 'Grilled chicken with melted cheese in a toasted sandwich.',
      price: '₹220',
    },
    {
      name: 'Roasted Chicken Sandwich',
      description: 'Roasted chicken, lettuce, tomato, homemade sauce and cheese slice.',
      price: '₹240',
    },
    {
      name: 'Tuna Melt Sandwich',
      description: 'Savory tuna salad topped with melted cheese.',
      price: '₹230',
    },
    {
      name: 'Chicken Club Sandwich',
      description: 'Three layers of bread with choice of fillings.',
      price: '₹290',
    },
    {
      name: 'Tuna Club Sandwich',
      description: 'Tuna, lettuce, tomato and cucumber.',
      price: '₹290',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        {/* Text on the Left */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Non‑Vegetarian Sandwiches</h3>
          {items.map((item, idx) => (
            <div className="menu-item" key={idx}>
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <span className="item-price">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Image on the Right */}
        <div className="menu-image-box">
          <img
            src="/Non-VegSandwich.jpg"
            alt="Non‑Vegetarian Sandwiches"
            className="menu-img"
          />
          <span className="img-label">Non‑Vegetarian Sandwiches</span>
        </div>
      </div>
    </section>
  );
};

export default NonVegetarianSandwiches;
