import React from 'react';
import './HotBeverages.css'; // Reusing shared styles

const Omelettes = () => {
  const items = [
    {
      name: 'Plain Omelette',
      description: 'A 3-egg-omelette served with 2 slices of bread and butter.',
      price: '₹180',
    },
    {
      name: 'Scrambled Omelette',
      description: 'Scrambled eggs served with 2 slices of bread and butter.',
      price: '₹180',
    },
    {
      name: 'Egg White Omelette',
      description: '4-egg-white omelette served with 2 slices of bread and butter.',
      price: '₹230',
    },
    {
      name: 'Masala Omelette',
      description:
        'A combination of 3 eggs, onion, capsicum, carrot, tomato and green chilli served with 2 slices of bread and butter.',
      price: '₹240',
    },
    {
      name: 'Cheese Omelette',
      description: 'Fluffy omelette filled with melted cheese.',
      price: '₹240',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper reverse">
        <div className="menu-text-box">
          <h3 className="menu-heading">Omelettes</h3>
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
          <img src="/Omelettes.jpg" alt="Omelettes" className="menu-img" />
          <span className="img-label">Omelettes</span>
        </div>
      </div>
    </section>
  );
};

export default Omelettes;
