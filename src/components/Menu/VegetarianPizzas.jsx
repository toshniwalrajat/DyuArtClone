// src/components/Menu/VegetarianPizzas.jsx
import React from 'react';
import './HotBeverages.css'; // re‑use the same menu styles

const VegetarianPizzas = () => {
  const items = [
    {
      name: 'Margherita Pizza',
      description:
        'Fresh tomato, oregano and mozzarella topped with fresh basil leaves & parmesan cheese.',
      price: '₹320',
    },
    {
      name: 'Italiano Pizza',
      description:
        'A classic combination of spinach, olives, sun‑dried tomato, mushroom and cheese.',
      price: '₹370',
    },
    {
      name: 'Spicy Roasted Vegetable Pizza',
      description:
        'Spicy cilantro pesto topped with onion, chilli, capsicum, baby corn, mushroom and cajun spices.',
      price: '₹370',
    },
    {
      name: 'BBQ Veg Pizza',
      description:
        'Cottage cheese, onion, chilli, bell peppers and cheese.',
      price: '₹370',
    },
    {
      name: 'Mexican Veg Pizza',
      description:
        'Kidney beans, corn, jalapenos, bell pepper, cilantro with mozzarella and yellow cheddar.',
      price: '₹380',
    },
  ];

  return (
    <section className="menu-section">
      {/* add "reverse" here to flip the order */}
      <div className="menu-wrapper reverse">
        {/* Image now comes first */}
        <div className="menu-image-box">
          <img
            src="/VegetarianPizzas.avif"
            alt="Vegetarian Pizzas"
            className="menu-img"
          />
          <span className="img-label">Vegetarian Pizzas</span>
        </div>

        {/* Text on the right */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Vegetarian Pizzas</h3>
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

export default VegetarianPizzas;
