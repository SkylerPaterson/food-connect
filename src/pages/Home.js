import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const stats = [
    { number: '2,400', label: 'lbs of food saved' },
    { number: '138', label: 'meals claimed' },
    { number: '47', label: 'restaurants joined' },
  ];

  const steps = [
    { icon: '01', title: 'Post', desc: 'Restaurants post surplus food with pickup time and quantity.' },
    { icon: '02', title: 'Browse', desc: 'Food banks browse available listings in real time.' },
    { icon: '03', title: 'Claim', desc: 'Claim food and pick it up — zero waste, zero cost.' },
  ];

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.navLogo}>FoodConnect</span>
      </nav>

      <div style={{
        ...styles.hero,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s ease',
      }}>
        <div style={styles.badge}>Tech for Good · 2026</div>
        <h1 style={styles.heading}>Surplus food,<br />zero waste.</h1>
        <p style={styles.subheading}>
          FoodConnect links restaurants with local food banks and churches —
          turning tonight's leftovers into tomorrow's meals.
        </p>
        <div style={styles.btnRow}>
          <button style={styles.btnPrimary} onClick={() => navigate('/restaurant')}>
            I'm a Restaurant
          </button>
          <button style={styles.btnSecondary} onClick={() => navigate('/foodbank')}>
            I'm a Food Bank / Church
          </button>
        </div>
      </div>

      <div style={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} style={styles.statItem}>
            <span style={styles.statNumber}>{s.number}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={styles.howSection}>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <div style={styles.stepsRow}>
          {steps.map((s, i) => (
            <div key={i} style={styles.stepCard}>
              <span style={styles.stepNumber}>{s.icon}</span>
              <h3 style={styles.stepTitle}>{s.title}</h3>
              <p style={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        FoodConnect · Built for the community · 2026
      </footer>
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
    padding: '20px 40px',
    backgroundColor: navy,
    display: 'flex',
    alignItems: 'center',
  },
  navLogo: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  hero: {
    backgroundColor: navy,
    color: 'white',
    padding: '80px 24px 100px',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(240,165,0,0.15)',
    color: amber,
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '6px 16px',
    borderRadius: '20px',
    marginBottom: '28px',
  },
  heading: {
    fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
    fontWeight: '800',
    lineHeight: 1.1,
    marginBottom: '20px',
    color: 'white',
  },
  subheading: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.75,
    maxWidth: '500px',
    margin: '0 auto 40px',
  },
  btnRow: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: amber,
    color: navy,
    border: 'none',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1.5px solid rgba(255,255,255,0.4)',
    padding: '14px 32px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
  statsBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid #e4e8f0',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 48px',
    borderRight: '1px solid #e4e8f0',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '800',
    color: navy,
    lineHeight: 1,
    marginBottom: '6px',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#6b7a99',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  howSection: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: navy,
    marginBottom: '40px',
    textAlign: 'center',
  },
  stepsRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stepCard: {
    backgroundColor: 'white',
    border: '1px solid #e4e8f0',
    borderRadius: '12px',
    padding: '32px 28px',
    flex: 1,
    minWidth: '220px',
    maxWidth: '260px',
  },
  stepNumber: {
    display: 'block',
    fontSize: '1.8rem',
    fontWeight: '900',
    color: amber,
    marginBottom: '12px',
  },
  stepTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: navy,
    marginBottom: '10px',
  },
  stepDesc: {
    fontSize: '0.95rem',
    color: '#6b7a99',
    lineHeight: 1.65,
  },
  footer: {
    textAlign: 'center',
    padding: '32px',
    fontSize: '0.85rem',
    color: '#9aa5bf',
    borderTop: '1px solid #e4e8f0',
  },
};

export default Home;