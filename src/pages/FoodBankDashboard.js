import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodBankDashboard() {
  const navigate = useNavigate();
  const [listings] = useState([
    {
      id: 1,
      restaurant: "Mario's Italian",
      foodItem: 'Pasta & Bread',
      quantity: '20 portions',
      pickupTime: 'Today 8pm-9pm',
      notes: 'Contains gluten',
      claimed: false,
    },
    {
      id: 2,
      restaurant: "Sunrise Cafe",
      foodItem: 'Sandwiches & Soup',
      quantity: '15 portions',
      pickupTime: 'Today 7pm-8pm',
      notes: 'Vegetarian friendly',
      claimed: false,
    },
    {
      id: 3,
      restaurant: "Green Bowl",
      foodItem: 'Rice & Vegetables',
      quantity: '30 portions',
      pickupTime: 'Today 9pm-10pm',
      notes: 'Vegan, no allergens',
      claimed: false,
    },
  ]);

  const [claimedIds, setClaimedIds] = useState([]);

  const handleClaim = (id) => {
    if (claimedIds.includes(id)) {
      alert('You already claimed this listing!');
      return;
    }
    setClaimedIds([...claimedIds, id]);
    alert('Successfully claimed! Please pick up at the listed time.');
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← Back</button>
      <h1 style={styles.title}>🏦 Available Food Listings</h1>
      <p style={styles.subtitle}>Browse and claim surplus food from local restaurants</p>

      {listings.map(listing => (
        <div key={listing.id} style={styles.card}>
          <h3 style={styles.restaurantName}>🍽️ {listing.restaurant}</h3>
          <p><strong>Food:</strong> {listing.foodItem}</p>
          <p>📦 <strong>Quantity:</strong> {listing.quantity}</p>
          <p>🕐 <strong>Pickup:</strong> {listing.pickupTime}</p>
          {listing.notes && <p>📝 <strong>Notes:</strong> {listing.notes}</p>}
          <button
            style={claimedIds.includes(listing.id) ? styles.claimedBtn : styles.claimBtn}
            onClick={() => handleClaim(listing.id)}
          >
            {claimedIds.includes(listing.id) ? '✅ Claimed!' : 'Claim This Food'}
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#2d6a4f',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  title: {
    fontSize: '2rem',
    color: '#2d6a4f',
  },
  subtitle: {
    color: '#555',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
  restaurantName: {
    color: '#2d6a4f',
    marginBottom: '10px',
  },
  claimBtn: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#52b788',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  claimedBtn: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default FoodBankDashboard;