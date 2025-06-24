import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine column basis: smaller on mobile
  const colBasis = isMobile ? '20%' : '25%';
  const storeImgSize = isMobile
  ? { height: '40px', width: '100px' }
  : { height: '55px', width: '140px' };


  return (
    <footer style={styles.footer}>
      {/* Top Section: no wrapping, shrinks columns */}
      <div
        style={{
          ...styles.topContainer,
          flexWrap: 'nowrap',        // prevent line breaks
          margin: '0 auto 30px',
        }}
      >
        <div style={{ ...styles.column, flexBasis: colBasis }}>
          <h4 style={styles.heading}>Company</h4>
          <p style={styles.link}>About Us</p>
          <p style={styles.link}>Careers</p>
        </div>
        <div style={{ ...styles.column, flexBasis: colBasis }}>
          <h4 style={styles.heading}>View Website in</h4>
          <p style={{ ...styles.link, fontWeight: 600 }}>✓ English</p>
        </div>
        <div style={{ ...styles.column, flexBasis: colBasis }}>
          <h4 style={styles.heading}>Need Help?</h4>
          <p style={styles.link}>Visit Help Center</p>
          <p style={styles.link}>Share Feedback</p>
        </div>
        <div style={{ ...styles.column, flexBasis: colBasis }}>
          <h4 style={styles.heading}>Connect with Us</h4>
          <div style={styles.socialIcons}>
            <span style={styles.icon}>📘</span>
            <span style={styles.icon}>𝕏</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: no wrapping, shrinks items */}
      <div
        style={{
          ...styles.bottomContainer,
          flexWrap: 'nowrap',
          margin: '0 auto',
        }}
      >
        <div style={{ ...styles.leftSection, flexBasis: isMobile ? '40%' : '50%' }}>
          <p style={styles.bottomText}>© 2025 STAR. All Rights Reserved.</p>
          <div style={styles.bottomLinks}>
            <p style={styles.link}>Terms Of Use</p>
            <p style={styles.link}>Privacy Policy</p>
            <p style={styles.link}>FAQ</p>
          </div>
        </div>
       <div
  style={{
    ...styles.rightSection,
    flexBasis: isMobile ? '40%' : '50%',
    justifyContent: isMobile ? 'flex-start' : 'flex-end',
  }}
>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={storeImgSize}
          />
          <img
            src="/images/appstore.png"
            alt="App Store"
                style={storeImgSize}
          />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    padding: '40px 20px',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    maxWidth: '1200px',
  },
  column: {
    flexGrow: 1,
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '10px',
  },
  link: {
    fontSize: '10px',
    margin: 0,
    marginBottom: '6px',
    cursor: 'pointer',
    color: '#c0c0c0',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
    fontSize: '18px',
    marginTop: '4px',
  },
  icon: {
    cursor: 'pointer',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    borderTop: '1px solid #333',
    paddingTop: '20px',
    maxWidth: '1200px',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxSizing: 'border-box',
  },
  bottomText: {
    fontSize: '8px',
    color: '#999',
    margin: 0,
  },
  bottomLinks: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'nowrap',
    margin: 0,
  },
  rightSection: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  storeImg: {
    height: '40px',
    width: '70px',
    objectFit: 'contain',
  },
};

export default Footer;
