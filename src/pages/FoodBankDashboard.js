import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodBankDashboard() {
  const navigate = useNavigate();
  const [claimed, setClaimed] = useState([]);
  const [listings, setListings] = useState([
    {
      id: 1,
      restaurantName: "Mario's Italian",
      foodItem: 'Pasta & Bread',
      quantity: '20 portions',
      pickupTime: 'Today 8pm - 9pm',
      notes: 'Contains gluten',
    },
    {
      id: 2,
      restaurantName: 'Sunrise Cafe',
      foodItem: 'Sandwiches & Soup',
      quantity: '15 portions',
      pickupTime: 'Today 7pm - 8pm',
      notes: 'Vegetarian friendly',
    },
    {
      id: 3,
      restaurantName: 'Green Bowl',
      foodItem: 'Rice & Vegetables',
      quantity: '30 portions',
      pickupTime: 'Today 9pm - 10pm',
      notes: 'Vegan, no allergens',
    },
  ]);
  const [tab, setTab] = useState('available');

  const handleClaim = (listing) => {
    setListings(listings.filter((l) => l.id !== listing.id));
    setClaimed([{ ...listing, claimedAt: 'Just now' }, ...claimed]);
  };

  const available = listings;
  const display = tab === 'available' ? available : claimed;

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.navLogo}>FoodConnect</span>
        <button style={styles.backBtn} onClick={() => navigate('/')}>Back to Home</button>
      </nav>

      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.pageTitle}>Food Bank Dashboard</h1>
          <p style={styles.pageSubtitle}>Browse and claim surplus food from local restaurants.</p>
        </div>

        <div style={styles.tabs}>
          <button
            style={tab === 'available' ? styles.tabActive : styles.tabInactive}
            onClick={() => setTab('available')}
          >
            Available Food
            {available.length > 0 && (
              <span style={styles.tabBadge}>{available.length}</span>
            )}
          </button>
          <button
            style={tab === 'claimed' ? styles.tabActive : styles.tabInactive}
            onClick={() => setTab('claimed')}
          >
            My Claims
            {claimed.length > 0 && (
              <span style={styles.tabBadge}>{claimed.length}</span>
            )}
          </button>
        </div>

        {display.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyMsg}>
              {tab === 'available'
                ? 'No food available right now — check back soon!'
                : "You haven't claimed anything yet."}
            </p>
          </div>
        ) : (
          display.map((listing) => (
            <div key={listing.id} style={styles.card}>
              <div style={styles.cardTop}>
                <div>
                  <h3 style={styles.foodItem}>{listing.foodItem}</h3>
                  <p style={styles.restaurantName}>{listing.restaurantName}</p>
                </div>
                {tab === 'claimed' && (
                  <span style={styles.claimedBadge}>Claimed</span>
                )}
              </div>

              <div style={styles.metaRow}>
                <div style={styles.metaChip}>
                  <span style={styles.metaLabel}>Quantity</span>
                  <span style={styles.metaValue}>{listing.quantity}</span>
                </div>
                <div style={styles.metaChip}>
                  <span style={styles.metaLabel}>Pickup</span>
                  <span style={styles.metaValue}>{listing.pickupTime}</span>
                </div>
                {listing.notes && (
                  <div style={styles.metaChip}>
                    <span style={styles.metaLabel}>Notes</span>
                    <span style={styles.metaValue}>{listing.notes}</span>
                  </div>
                )}
              </div>

              {tab === 'available' && (
                <button
                  style={styles.claimBtn}
                  onClick={() => handleClaim(listing)}
                >
                  Claim This Food
                </button>
              )}

              {tab === 'claimed' && (
                <p style={styles.claimedNote}>
                  Claimed {listing.claimedAt} · Contact the restaurant to confirm pickup.
                </p>
              )}
            </div>
          ))
        )}
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
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
  },
  tabActive: {
    backgroundColor: navy,
    color: 'white',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tabInactive: {
    backgroundColor: 'white',
    color: '#6b7a99',
    border: '1px solid #e4e8f0',
    padding: '10px 24px',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tabBadge: {
    backgroundColor: amber,
    color: navy,
    fontSize: '0.75rem',
    fontWeight: '800',
    padding: '2px 8px',
    borderRadius: '20px',
  },
  emptyState: {
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
    padding: '60px 24px',
    textAlign: 'center',
  },
  emptyMsg: {
    color: '#9aa5bf',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '16px',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  foodItem: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: navy,
    marginBottom: '4px',
  },
  restaurantName: {
    fontSize: '0.9rem',
    color: '#6b7a99',
  },
  claimedBadge: {
    backgroundColor: '#e8f5ee',
    color: '#1a7a4a',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '4px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  metaRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  metaChip: {
    backgroundColor: bg,
    border: '1px solid #e4e8f0',
    borderRadius: '8px',
    padding: '8px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  metaLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#9aa5bf',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  metaValue: {
    fontSize: '0.9rem',
    color: navy,
    fontWeight: '500',
  },
  claimBtn: {
    backgroundColor: amber,
    color: navy,
    border: 'none',
    padding: '12px 28px',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '700',
    cursor: 'pointer',
  },
  claimedNote: {
    fontSize: '0.85rem',
    color: '#6b7a99',
    fontStyle: 'italic',
    marginTop: '4px',
  },
};

export default FoodBankDashboard;