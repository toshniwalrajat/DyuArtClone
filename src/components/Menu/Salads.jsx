// src/components/Menu/SaladsSection.jsx
import React from 'react';
import './Salads.css'; // Reuses the global menu-section styles

const Salads = () => {
  const items = [
    {
      name: 'Mexican Bell Pepper Salad',
      description:
        'A spicy combination of jalapeno, bell peppers, iceberg lettuce and sweet corn topped with nachos, salsa and sour cream.',
      price: '₹210',
    },
    {
      name: 'Chef’s Special Salad',
      description:
        'A healthy combination of zucchini, broccoli, bell pepper, sweet corn, baby corn, cherry tomato tossed in virgin olive oil and herbs served with garlic bread.',
      price: '₹230',
    },
    {
      name: 'Thai Cucumber Salad',
      description:
        'Sweet and tangy summer salad of cucumber, cilantro, onions and roasted peanuts.',
      price: '₹210',
    },
    {
      name: 'Sprout Salad',
      description:
        'Home grown sprout, cucumber, tomato, carrot, and capsicum mixed with virgin olive oil, white vinegar and herbs served with garlic bread.',
      price: '₹200',
    },
    {
      name: 'Cold Potato Salad',
      description:
        'Boiled potato, egg-white, onion and garlic powder, tossed in homemade salad dressing.',
      price: '₹190',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        <div className="menu-image-box">
          {/* ✅ Place Salads.jpg in /public folder */}
          <img src="/Salads.jpg" alt="Fresh Salads" className="menu-img" />
          <span className="img-label">Salads</span>
        </div>

        <div className="menu-text-box">
          <h3 className="menu-heading">Salads</h3>
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

export default Salads;
