import React from 'react';
import './Non-VegetarianStarters.css'; // Reusing the same CSS styling

const NonVegetarianStarters = () => {
  const items = [
    {
      name: 'California Fried Chicken',
      description:
        'Deep fried chicken supreme coated with oats and cornflakes served with hot garlic and honey mustard.',
      price: '₹230',
    },
    {
      name: 'Chicken Schnitze',
      description:
        'Finely sliced chicken coated with panko bread served with tartar sauce and fries.',
      price: '₹250',
    },
    {
      name: 'Chicken Cutlet',
      description:
        'A classic combination of minced meat, potato and spices.',
      price: '₹240',
    },
    {
      name: 'Fish Fingers',
      description: 'Batter-fried fish served with tartar sauce and fries.',
      price: '₹240',
    },
    {
      name: 'Chicken Winglets',
      description:
        'Crispy chicken wings tossed in choice of sauce (BBQ/Honey glazed).',
      price: '₹230',
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-wrapper reverse">
        <div className="menu-image-box">
          <img
            src="/nonveg-starters.jpg"
            alt="Non-Vegetarian Starters"
            className="menu-img"
          />
          <span className="img-label">Non-Vegetarian Starters</span>
        </div>

        <div className="menu-text-box">
          <h3 className="menu-heading">Non-Vegetarian Starters</h3>
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

export default NonVegetarianStarters;
