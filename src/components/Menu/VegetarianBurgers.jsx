import React from 'react';
import './HotBeverages.css'; // Reusing the same shared styles

const VegetarianBurgers = () => {
  const items = [
    {
      name: 'Vegetable Burger',
      description: 'Mixed vegetable patty, lettuce, tomato and cheese.',
      price: '₹280',
    },
    {
      name: 'Cheesy Mushroom Burger',
      description: 'Cheese patty topped with creamy mushroom, tomato, lettuce and cheese.',
      price: '₹320',
    },
    {
      name: 'Cottage Cheese Burger',
      description:
        'Homemade patty made of cottage cheese and vegetables, layered with tomato, lettuce and cheese.',
      price: '₹290',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        <div className="menu-image-box">
          <img src="/VegetarianBurgers.avif" alt="Vegetarian Burgers" className="menu-img" />
          <span className="img-label">Vegetarian Burgers</span>
        </div>

        <div className="menu-text-box">
          <h3 className="menu-heading">Vegetarian Burgers</h3>
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

export default VegetarianBurgers;
