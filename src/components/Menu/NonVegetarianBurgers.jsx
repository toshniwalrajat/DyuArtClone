import React from 'react';
import './HotBeverages.css'; // reuse the same menu styles

const NonVegetarianBurgers = () => {
  const items = [
    {
      name: 'Chicken Steak Burger',
      description: 'Chicken steak, lettuce, caramelized onions, tomato and cheese.',
      price: '₹330',
    },
    {
      name: 'Crispy Chicken Burger',
      description: 'Crumb fried chicken, tomato, lettuce, mayonnaise, caramelized onions and cheese.',
      price: '₹330',
    },
    {
      name: 'Lamb Burger',
      description: 'Minced lamb patty, lettuce, tomato, caramelized onions and cheese.',
      price: '₹380',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper reverse">
        {/* Text on Left */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Non‑Vegetarian Burgers</h3>
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

        {/* Image on Right */}
        <div className="menu-image-box">
          <img
            src="/public/Non-Vegetarian Burgers.avif"
            alt="Non‑Vegetarian Burgers"
            className="menu-img"
          />
          <span className="img-label">Non‑Vegetarian Burgers</span>
        </div>
      </div>
    </section>
  );
};

export default NonVegetarianBurgers;
