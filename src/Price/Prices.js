import React from 'react';
import NavBar from "../components/NavBar";
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';

// Reusable Pricing Card Component
const PricingCardComponent = ({ category, services }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '350px', // Max width for responsiveness
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    transition: 'transform 0.3s ease', // Smooth hover effect
  };

//   const categoryStyle = {
//     fontSize: '1.2em',
//     marginBottom: '10px',
//     color: '#333',
//   };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #ddd',
  };

  const priceStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5em',
    color: '#4CAF50',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headerStyle}>{category}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span>{item.name}</span>
            <span style={priceStyle}>{item.price}</span>
            
          </li>
        ))}
      </ul>
      <button className='text-center mt-3 bg-danger text-white border-0'>Buy Now</button>
    </div>
  );
};

// Pricing Page Component
const PricingCard = () => {
  const services = [
    {
      category: 'Construction Services',
      items: [
        { name: 'Excavation (Small Project)', price: '$1,500 - $3,000' },
        { name: 'Excavation (Large Project)', price: '$5,000 - $12,000' },
        { name: 'Site Preparation', price: '$10 /m²' },
        { name: 'Foundation Work', price: 'Custom Quote' },
        { name: 'Road Construction', price: 'Custom Quote' },
      ],
    },
    {
      category: 'Mining Services',
      items: [
        { name: 'Drilling & Blasting', price: '$100 / meter' },
        { name: 'Hauling & Transportation', price: '$150 / day' },
        { name: 'Earthmoving & Excavation', price: '$250 / day' },
        { name: 'Mining Equipment Rentals', price: 'Starting at $150 / day' },
        { name: 'Road Construction', price: 'Custom Quote' },
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // Center cards
          padding: '20px',
        }}
      >
        {services.map((service, index) => (
          <PricingCardComponent
            key={index}
            category={service.category}
            services={service.items}
          />
          
        ))}
        
      </div>
      <BrandLogoSlider />
      <Footer />
    </>
  );
};

export default PricingCard;
