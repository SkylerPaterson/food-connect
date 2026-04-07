import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantDashboard() {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    foodItem: '',
    quantity: '',
    pickupTime: '',
    notes: '',
  });

  const handleSubmit = () => {
    if (!form.foodItem || !form.quantity || !form.pickupTime) {
      alert('Please fill out all required fields!');
      return;
    }
    const newListing = { ...form, id: Date.now(), claimed: false };
    setListings([...listings, newListing]);
    setForm({ foodItem: '', quantity: '', pickupTime: '', notes: '' });
    alert('Food listing posted successfully!');
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← Back</button>
      <h1 style={styles.title}>🏪 Restaurant Dashboard</h1>
      <p style={styles.subtitle}>Post your surplus food for pickup</p>

      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Food Item (e.g. Pasta, Bread) *"
          value={form.foodItem}
          onChange={e => setForm({ ...form, foodItem: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Quantity (e.g. 20 portions) *"
          value={form.quantity}
          onChange={e => setForm({ ...form, quantity: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Pickup Time (e.g. Today 8pm-9pm) *"
          value={form.pickupTime}
          onChange={e => setForm({ ...form, pickupTime: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Notes (e.g. contains nuts, refrigerated)"
          value={form.notes}
          onChange={e => setForm({ ...form, notes: e.target.value })}
        />
        <button style={styles.submitBtn} onClick={handleSubmit}>
          Post Food Listing
        </button>
      </div>

      <h2 style={styles.sectionTitle}>Your Active Listings</h2>
      {listings.length === 0 ? (
        <p style={styles.empty}>No listings yet. Post your first one above!</p>
      ) : (
        listings.map(listing => (
          <div key={listing.id} style={styles.card}>
            <h3>{listing.foodItem}</h3>
            <p>📦 Quantity: {listing.quantity}</p>
            <p>🕐 Pickup: {listing.pickupTime}</p>
            {listing.notes && <p>📝 Notes: {listing.notes}</p>}
            <p style={{ color: listing.claimed ? 'green' : 'orange' }}>
              {listing.claimed ? '✅ Claimed' : '⏳ Waiting for pickup'}
            </p>
          </div>
        ))
      )}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  submitBtn: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  sectionTitle: {
    color: '#2d6a4f',
    marginBottom: '10px',
  },
  empty: {
    color: '#999',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '10px',
  },
};

export default RestaurantDashboard;