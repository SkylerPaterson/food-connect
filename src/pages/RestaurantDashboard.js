import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantDashboard() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    restaurantName: '',
    foodItem: '',
    quantity: '',
    pickupTime: '',
    notes: '',
  });
  const [listings, setListings] = useState([
    {
      id: 1,
      restaurantName: 'Mario\'s Italian',
      foodItem: 'Pasta & Bread',
      quantity: '20 portions',
      pickupTime: 'Today 8pm - 9pm',
      notes: 'Contains gluten',
    },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.foodItem || !form.quantity || !form.pickupTime) {
      alert('Please fill in Food Item, Quantity, and Pickup Time.');
      return;
    }
    const newListing = { ...form, id: Date.now() };
    setListings([newListing, ...listings]);
    setForm({ restaurantName: '', foodItem: '', quantity: '', pickupTime: '', notes: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.navLogo}>FoodConnect</span>
        <button style={styles.backBtn} onClick={() => navigate('/')}>Back to Home</button>
      </nav>

      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Restaurant Dashboard</h1>
          <p style={styles.pageSubtitle}>Post your surplus food and help your community.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Post a Food Listing</h2>

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Restaurant Name</label>
              <input
                style={styles.input}
                name="restaurantName"
                placeholder="e.g. Mario's Italian"
                value={form.restaurantName}
                onChange={handleChange}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Food Item *</label>
              <input
                style={styles.input}
                name="foodItem"
                placeholder="e.g. Pasta & Bread"
                value={form.foodItem}
                onChange={handleChange}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Quantity *</label>
              <input
                style={styles.input}
                name="quantity"
                placeholder="e.g. 20 portions"
                value={form.quantity}
                onChange={handleChange}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Pickup Time *</label>
              <input
                style={styles.input}
                name="pickupTime"
                placeholder="e.g. Today 8pm - 9pm"
                value={form.pickupTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Notes (optional)</label>
            <textarea
              style={styles.textarea}
              name="notes"
              placeholder="Allergens, dietary info, special instructions..."
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          <button style={styles.submitBtn} onClick={handleSubmit}>
            Post Listing
          </button>

          {submitted && (
            <div style={styles.successMsg}>
              Listing posted successfully!
            </div>
          )}
        </div>

        <div style={styles.listingsSection}>
          <h2 style={styles.cardTitle}>Your Active Listings</h2>
          {listings.length === 0 ? (
            <p style={styles.emptyMsg}>No listings yet. Post your first one above!</p>
          ) : (
            listings.map((l) => (
              <div key={l.id} style={styles.listingCard}>
                <div style={styles.listingHeader}>
                  <h3 style={styles.listingFood}>{l.foodItem}</h3>
                  <span style={styles.activeBadge}>Active</span>
                </div>
                {l.restaurantName && (
                  <p style={styles.listingDetail}>{l.restaurantName}</p>
                )}
                <div style={styles.listingMeta}>
                  <span style={styles.metaItem}>Qty: {l.quantity}</span>
                  <span style={styles.metaDot}>·</span>
                  <span style={styles.metaItem}>Pickup: {l.pickupTime}</span>
                  {l.notes && (
                    <>
                      <span style={styles.metaDot}>·</span>
                      <span style={styles.metaItem}>{l.notes}</span>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const navy = '#0f1f3d';
const amber = '#f0a500';
const bg = '#f5f7fa';

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: bg,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  nav: {
    padding: '18px 40px',
    backgroundColor: navy,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navLogo: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  backBtn: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,0.7)',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '8px 18px',
    borderRadius: '6px',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '48px 24px',
  },
  pageHeader: {
    marginBottom: '32px',
  },
  pageTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: navy,
    marginBottom: '8px',
  },
  pageSubtitle: {
    fontSize: '1rem',
    color: '#6b7a99',
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '32px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: navy,
    marginBottom: '24px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '16px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#4a5568',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    padding: '12px 14px',
    border: '1px solid #e4e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    color: navy,
    outline: 'none',
    backgroundColor: '#fafbfc',
  },
  textarea: {
    padding: '12px 14px',
    border: '1px solid #e4e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    color: navy,
    outline: 'none',
    backgroundColor: '#fafbfc',
    minHeight: '80px',
    resize: 'vertical',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  submitBtn: {
    backgroundColor: amber,
    color: navy,
    border: 'none',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '8px',
  },
  successMsg: {
    marginTop: '16px',
    padding: '12px 16px',
    backgroundColor: '#e8f5ee',
    color: '#1a7a4a',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
  },
  listingsSection: {
    marginTop: '8px',
  },
  emptyMsg: {
    color: '#9aa5bf',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
  },
  listingCard: {
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
    padding: '20px 24px',
    marginBottom: '12px',
  },
  listingHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  listingFood: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: navy,
  },
  activeBadge: {
    backgroundColor: '#e8f5ee',
    color: '#1a7a4a',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '4px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  listingDetail: {
    fontSize: '0.9rem',
    color: '#6b7a99',
    marginBottom: '8px',
  },
  listingMeta: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  metaItem: {
    fontSize: '0.9rem',
    color: '#4a5568',
  },
  metaDot: {
    color: '#c0c8d8',
  },
};

export default RestaurantDashboard;