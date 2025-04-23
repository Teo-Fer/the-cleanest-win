import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Inicio</li>
          <li style={styles.navItem}>Servicios</li>
          <li style={styles.navItem}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 15px',
    cursor: 'pointer',
  },
};

export default Header;