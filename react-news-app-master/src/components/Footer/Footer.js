import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 NEWSFEED</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
