import React from 'react';
import './HotBeverages.css'; // reuse same menu styles

const NonVegetarianPizzas = () => {
  const items = [
    {
      name: 'Chicken All‑Meat Pizza',
      description:
        'Minced chicken, chicken salami, chicken sausage, chicken pepperoni, chicken ham topped with chilli and mozzarella.',
      price: '₹420',
    },
    {
      name: 'Half Veg Half Non‑Veg Pizza',
      description:
        'Pesto sauce topped with spinach, mushroom, olives, sun‑dried tomato, chicken and chicken pepperoni.',
      price: '₹400',
    },
    {
      name: 'Spicy Roasted Chicken Pizza',
      description:
        'Cilantro pesto topped with chicken, onion, capsicum, chilli, baby corn, mushroom and mozzarella.',
      price: '₹410',
    },
    {
      name: 'Spicy Lamb Pizza',
      description:
        'Thyme flavoured spicy lamb, tomato, herbs and mozzarella.',
      price: '₹400',
    },
    {
      name: 'Pickled Chicken Pizza',
      description:
        'Pickled chicken, red glazed onion, garlic and mozzarella.',
      price: '₹400',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper reverse">
        {/* Text Left */}
        <div className="menu-text-box">
          <h3 className="menu-heading">Non‑Vegetarian Pizzas</h3>
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

        {/* Image Right */}
        <div className="menu-image-box">
          <img
            src="/NonVegPizza.avif"
            alt="Non‑Vegetarian Pizzas"
            className="menu-img"
          />
          <span className="img-label">Non‑Vegetarian Pizzas</span>
        </div>
      </div>
    </section>
  );
};

export default NonVegetarianPizzas;
