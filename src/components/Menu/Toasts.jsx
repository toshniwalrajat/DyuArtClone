import React from 'react';
import './HotBeverages.css'; // Reusing the same styles

const Toasts = () => {
  const items = [
    {
      name: 'Wheat Toast',
      description: 'Homemade vanilla brown bread served with butter.',
      price: '₹100',
    },
    {
      name: 'Garlic Toast',
      description: 'Homemade bread toasted with garlic butter.',
      price: '₹120',
    },
    {
      name: 'Cheese Toast',
      description: 'White bread topped with Mozeralla Cheese',
      price: '₹160',
    },
    {
      name: 'Chilli Cheese Toast',
      description: 'A serving of 2 slices of vanilla brown bread toasted with garlic butter and topped with cheese spread.',
      price: '₹140',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper reverse">
        <div className="menu-image-box">
          <img src="/Toasts.avif" alt="Toasts" className="menu-img" />
          <span className="img-label">Toasts</span>
        </div>

        <div className="menu-text-box">
          <h3 className="menu-heading">Toasts</h3>
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

export default Toasts;
