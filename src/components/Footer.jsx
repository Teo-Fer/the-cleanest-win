import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Actividad de Integración DEGI. Todos los derechos reservados.</p>
    </footer>
  );
};


const styles = {

    footer: {
  
      backgroundColor: '#4CAF50',
  
      color: 'white',
  
      textAlign: 'center',
  
      padding: '10px 0',
  
      position: 'absolute',
  
      bottom: 0,
  
      width: '100%',
  
    },
  
  };

export default Footer;