// src/components/Menu/HotBeverages.jsx
import React from 'react';
import './HotBeverages.css';

const HotBeverages = () => {
  const items = [
    {
      name: 'Hot Chocolate',
      description: 'Fresh cocoa, melted chocolate and hot milk. Calling all CHOCOHOLICS!',
      price: '₹190',
    },
    {
      name: 'Cappuccino',
      description: 'Espresso shot topped with rich frothed milk and a dash of cinnamon.',
      price: '₹170',
    },
    {
      name: 'Masala Chai',
      description: 'Milk tea brewed with a mixture of aromatic spices and herbs.',
      price: '₹110',
    },
    {
      name: 'Green Tea',
      description: 'A pot of hot water infused with organic green tea leaves.',
      price: '₹180',
    },
    {
      name: 'Melange',
      description: 'Cappuccino topped with a generous amount of whipped cream.',
      price: '₹180',
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <h2 className="menu-title" id="menu-section">Our Menu</h2>

      <div className="menu-wrapper">
        <div className="menu-text-box">
          <h3 className="menu-heading">Hot Beverages</h3>
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

        <div className="menu-image-box">
          <img src="/hot-beverage.jpg" alt="Hot Beverages" className="menu-img" />
          <span className="img-label">Hot Beverages</span>
        </div>
      </div>
    </section>
  );
};

export default HotBeverages;
