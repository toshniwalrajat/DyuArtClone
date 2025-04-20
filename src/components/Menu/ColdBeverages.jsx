import React from 'react';
import './HotBeverages.css'; // Reusing styles

const ColdBeverages = () => {
  const items = [
    {
      name: 'Cold Chocolate',
      description: 'A sinful combination of chocolate, fresh cocoa topped with cold milk and chocolate shavings.',
      price: '₹220',
    },
    {
      name: 'Coffee Frappe',
      description: 'A blend of frozen espresso and sweetened milk.',
      price: '₹230',
    },
    {
      name: 'Vietnamese Iced Coffee',
      description: 'Strong coffee topped with sweetened condensed milk and ice.',
      price: '₹190',
    },
    {
      name: 'Mint Lime Cooler',
      description: 'A fresh blend of mint, lime and soda.',
      price: '₹140',
    },
    {
      name: 'Iced Tea',
      description: 'Freshly brewed hand-picked Nilgiri tea leaves blended with freshly squeezed lime and sugar syrup.',
      price: '₹170',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        {/* Image First - on the Left */}
        <div className="menu-image-box">
          <img src="/public/cold-beverage.jpg" alt="Cold Beverages" className="menu-img" />
          <span className="img-label">Cold Beverages</span>
        </div>

        {/* Text Second - on the Right */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Cold Beverages</h3>
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

export default ColdBeverages;
