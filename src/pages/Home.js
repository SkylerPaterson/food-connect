import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ FoodConnect</h1>
      <p style={styles.subtitle}>Connecting restaurants with communities in need</p>
      <div style={styles.buttonContainer}>
        <button style={styles.restaurantBtn} onClick={() => navigate('/restaurant')}>
          🏪 I'm a Restaurant
        </button>
        <button style={styles.foodbankBtn} onClick={() => navigate('/foodbank')}>
          🏦 I'm a Food Bank / Church
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f0',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#2d6a4f',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  restaurantBtn: {
    padding: '20px 40px',
    fontSize: '1.1rem',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  foodbankBtn: {
    padding: '20px 40px',
    fontSize: '1.1rem',
    backgroundColor: '#52b788',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default Home;