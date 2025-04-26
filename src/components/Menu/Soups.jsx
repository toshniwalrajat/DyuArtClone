import React from 'react';
import './Soups.css'; // Reuse the same styles

const SoupsSection = () => {
  const items = [
    {
      name: 'Tomato Basil Soup',
      description: 'A classic creamy tomato soup with a hint of fresh basil.',
      price: '₹160',
    },
    {
      name: 'Sweet Corn Soup',
      description: 'Mildly spiced creamy corn soup with veggies and herbs.',
      price: '₹150',
    },
    {
      name: 'Hot & Sour Soup',
      description: 'Tangy and spicy soup loaded with veggies and soy.',
      price: '₹170',
    },
    {
      name: 'Cream of Mushroom Soup',
      description: 'A smooth, earthy mushroom soup finished with cream.',
      price: '₹180',
    },
    {
      name: 'Chicken Clear Soup',
      description: 'Light and flavorful clear chicken broth with herbs.',
      price: '₹190',
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-wrapper">
        <div className="menu-text-box">
          <h3 className="menu-heading">Soups</h3>
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
          <img src="/soups.jpg" alt="Soups" className="menu-img" />
          <span className="img-label">Soups</span>
        </div>
      </div>
    </section>
  );
};

export default SoupsSection;
