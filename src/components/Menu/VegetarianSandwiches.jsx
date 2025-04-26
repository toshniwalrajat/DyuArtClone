import React from 'react';
import './HotBeverages.css'; // re‑use the same menu styles

const VegetarianSandwiches = () => {
  const items = [
    {
      name: 'Herb Cheese Sandwich',
      description:
        'Homemade cottage cheese, cheese spread, tomato, cucumber and herbs.',
      price: '₹190',
    },
    {
      name: 'Mushroom Cheese Sandwich',
      description:
        'Sauteed mushrooms with melted cheese in a sandwich.',
      price: '₹200',
    },
    {
      name: 'Roasted Vegetable Sandwich',
      description:
        'Roasted veggies with a hint of spice between slices of bread.',
      price: '₹240',
    },
    {
      name: 'Banana Sandwich',
      description:
        'Sweet banana slices in a soft sandwich, perfect for a quick bite.',
      price: '₹150',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper reverse">
        {/* Image on Right */}
        <div className="menu-image-box">
          <img
            src="/Vegetarian-Sandwich.jpg"
            alt="Vegetarian Sandwiches"
            className="menu-img"
          />
          <span className="img-label">Vegetarian Sandwiches</span>
        </div>

        {/* Text on Left */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Vegetarian Sandwiches</h3>
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
      </div>
    </section>
  );
};

export default VegetarianSandwiches;
