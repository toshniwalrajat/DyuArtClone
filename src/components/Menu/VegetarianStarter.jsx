import React from 'react';
import './VegetarianStarter.css'; // Reusing existing layout & styling

const VegetarianStarter = () => {
  const items = [
    {
      name: 'Cheese Balls',
      description: 'Cheese of 3 varieties mixed with potato and herbs.',
      price: '₹240',
    },
    {
      name: 'Onion Rings',
      description:
        'Rings of sliced onions dipped in homemade batter and deep fried served with honey Mustard and hot garlic sauce.',
      price: '₹200',
    },
    {
      name: 'French Croquettes',
      description:
        'Mixed vegetables with peanuts and potato served with cilantro pesto, mayo and hot garlic sauce.',
      price: '₹200',
    },
    {
      name: 'Fries',
      description: 'Peri-peri/Normal served with tomato sauce.',
      price: '₹230',
    },
    {
      name: 'Cheddar-Stuffed Mushrooms',
      description:
        'Cheddar cheese stuffed with mushroom, served with tartar sauce and sweet chilli sauce.',
      price: '₹250',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        {/* Text on the left */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Vegetarian Starters</h3>
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

        {/* Image on the right */}
        <div className="menu-image-box">
          <img
            src="/veg-starters.avif" // Make sure this image is placed in your /public folder
            alt="Vegetarian Starters"
            className="menu-img"
          />
          <span className="img-label">Vegetarian Starters</span>
        </div>
      </div>
    </section>
  );
};

export default VegetarianStarter;
