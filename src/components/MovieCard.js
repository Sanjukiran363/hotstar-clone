import React, { useState, useEffect } from 'react';

const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 600
  );

  // listen for resize to update isMobile flag
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // choose a fluid width
  const cardWidth = isMobile ? '10000vw' : '5000px';
  const cardHeight = isMobile ? '100px' : '225px';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: cardWidth,
        maxWidth: '400px',
        position: 'relative',
        margin: isMobile ? '0 auto 8px' : '0 8px 0 0',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.2)' : 'scale(1)',
        zIndex: hovered ? 10 : 1,
      }}
    >
      <div
        style={{
          backgroundColor: '#000',
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 12px 24px rgba(0,0,0,0.85)'
            : '0 4px 10px rgba(0,0,0,0.4)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Image */}
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: '100%',
            height: cardHeight,
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Expandable Info */}
      <div
  style={{
    height: hovered ? '30px' : '10px',
            width:hovered? '200px': '30px',
    opacity: hovered ? 1 : 0,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    backgroundColor: '#111',
    color: '#fff',
      padding: hovered ? '50px' : '0 12px',
            borderRadius: '0 0 10px 10px',
            marginBottom: 100,
            marginTop:-30,
  }}
>
  <h4
    style={{
      fontSize: 10,
      fontWeight: 600,
      margin: '0 0 4px',
      textAlign: 'center',
    }}
  >
    {movie.title}
  </h4>
  <div style={{ fontSize: 9, opacity: 0.7, marginBottom: 2, textAlign: 'center' }}>
    2023 • U/A 13+ • 2h 20m • Telugu • Action
  </div>
  <div
    style={{
      fontSize: 8,
      lineHeight: 1.2,
      marginBottom: 4,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textAlign: 'center',
    }}
  >
    A thrilling mystery unfolds with powerful performances.
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
    <button
      style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: '4px 8px',
        fontSize: 9,
        borderRadius: 4,
        cursor: 'pointer',
        border: 'none',
      }}
    >
      ▶
    </button>
    <button
      style={{
        backgroundColor: 'transparent',
        color: '#fff',
        border: '1px solid #fff',
        padding: '4px 8px',
        fontSize: 9,
        borderRadius: 4,
        cursor: 'pointer',
      }}
    >
      +
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default MovieCard;
