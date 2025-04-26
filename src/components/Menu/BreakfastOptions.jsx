import React from 'react';
import './HotBeverages.css'; // Reuse same styles
import breakfastImg from '/public/BreakfastOptions.jpg'; // Adjust if your path is different

const BreakfastOptions = () => {
  const items = [
    {
      name: 'English Breakfast',
      description:
        'Eggs to order, chicken sausages, hash brown, grilled tomatoes, mushrooms, and baked beans. Served with toast, butter and fresh juice.',
      price: '₹360',
    },
    {
      name: 'Everyday Breakfast',
      description:
        'A spread of 2 fried eggs, french toast, chicken sausages, grilled tomatoes and baked beans.',
      price: '₹280',
    },
    {
      name: 'Healthy Breakfast',
      description:
        'Sprout salad, Grilled veg, Grilled Tomato, Baked Beans, Mushrooms, Sweet corn, Watermelon slice and Toast.',
      price: '₹340',
    },
    {
      name: 'Waffle',
      description: 'Warm waffles dusted with powdered sugar.',
      price: '₹180',
    },
    {
      name: 'French Toast',
      description:
        'Slices of fresh vanilla brown bread soaked in batter, slow cooked to a golden brown and dusted with powdered sugar.',
      price: '₹200',
    },
    {
      name: 'Pancake',
      description: 'Golden-brown sugar dusted pancakes.',
      price: '₹190',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        <div className="menu-text-box">
          <h3 className="menu-heading">Breakfast Options</h3>
          {items.map((item, index) => (
            <div className="menu-item" key={index}>
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <span className="item-price">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="menu-image-box">
          <img src={breakfastImg} alt="Breakfast Options" className="menu-img" />
          <span className="img-label">Breakfast Options</span>
        </div>
      </div>
    </section>
  );
};

export default BreakfastOptions;
