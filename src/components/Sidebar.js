import React, { useState, useEffect } from 'react';
import {
  Home, Search, Tv, Video, Star, User, Rocket, Grid3X3,
} from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: Home },
  { name: 'Search', icon: Search },
  { name: 'TV', icon: Tv },
  { name: 'Movies', icon: Video },
  { name: 'Sports', icon: Star },
  { name: 'Sparks', icon: Rocket },
  { name: 'Categories', icon: Grid3X3 },
  { name: 'My Space', icon: User },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
 const [isMobile, setIsMobile] = useState(
  typeof window !== 'undefined' ? window.innerWidth <= 768 : false
);

useEffect(() => {
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);



  // ✅ Mobile: Bottom Navbar
  if (isMobile) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 9,
        width: '91%',
        height: '60px',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #333',
        zIndex: 1000,
        padding: '0 10px',
      }}
    >
      {menuItems.slice(0, 5).map(({ name, icon: Icon }, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '10px',
            gap: '2px',
            flex: 1,
            textAlign: 'center',
          }}
        >
          <Icon size={20} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

  // ✅ Desktop: Sidebar
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: isHovered ? '200px' : '60px',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '24px 0',
          paddingLeft: '20px',
          transition: 'width 0.3s ease',
          zIndex: 1000,
        }}
      >
        {/* 🔥 Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px 32px 7px',
            width: '100%',
          }}
        >
          <img
            src="/hotstar-logo.png"
            alt="Logo"
            style={{ height: '45px', width: '45px', objectFit: 'contain' }}
          />
          {isHovered && (
            <span style={{ fontSize: '16px', fontWeight: '600', marginLeft: '12px' }}></span>
          )}
        </div>

        {/* 💡 Menu Items */}
        <div style={{ width: '100%' }}>
          {menuItems.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                cursor: 'pointer',
                gap: '16px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Icon size={20} color="#fff" />
              {isHovered && <span style={{ fontSize: '14px' }}>{name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 💡 Overlay Shadow on desktop */}
      {isHovered && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: '200px',
            width: '300px',
            height: '100vh',
            background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0))',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
