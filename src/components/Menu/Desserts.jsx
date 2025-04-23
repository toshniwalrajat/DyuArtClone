// src/components/Menu/Desserts.jsx
import React from 'react';
import './HotBeverages.css'; // Reuse the same shared styles

const Desserts = () => {
  const items = [
    {
      name: 'Banoffee Pie',
      description: 'Slices of banana layered with home-made toffee and topped with whipped cream.',
      price: '₹180',
    },
    {
      name: 'Key Lime Pie',
      description: 'A tangy and creamy pie.',
      price: '₹180',
    },
    {
      name: 'Tender Coconut Pudding',
      description: 'A light and healthy pudding made of coconut water, pulp and china grass.',
      price: '₹180',
    },
    {
      name: 'Baked Cheesecake',
      description: 'Homemade cheesecake baked to perfection. (Plain/ Salted caramel)',
      price: '₹190',
    },
    {
      name: 'Creme Brulee',
      description: 'Rich french custard base topped with a layer of hard caramel.',
      price: '₹190',
    },
    {
      name: 'Chocolate Cake',
      description: 'Our signature chocolate cake served with our special chocolate sauce.',
      price: '₹190',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        {/* Image Left */}
        <div className="menu-image-box">
          <img
            src="/Desserts.avif" // make sure this path matches your public folder
            alt="Desserts"
            className="menu-img"
          />
          <span className="img-label">Desserts</span>
        </div>

        {/* Text Right */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Desserts</h3>
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

export default Desserts;
