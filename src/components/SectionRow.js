import React, { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SectionRow = ({ title, movies }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 600
  );
  const scrollRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const cardsPerPage = 8;
  const totalPages = Math.ceil(movies.length / cardsPerPage);

  const handlePrev = () => index > 0 && setIndex(index - 1);
  const handleNext = () => index < totalPages - 1 && setIndex(index + 1);

  // helper: scroll by width
  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  // Mobile: scrollable with arrows
  if (isMobile) {
    return (
      <div style={{ position: 'relative', margin: 0, padding: '0 8px' }}>
        <h2 style={{ fontSize: '20px', margin: '16px 0', color: 'white' }}>
          {title}
        </h2>
        {/* Mobile arrows */}
        <button
          onClick={() => scrollBy(-200)}
          style={styles.mobileArrowLeft}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scrollBy(200)}
          style={styles.mobileArrowRight}
        >
          <ChevronRight />
        </button>
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            padding: '8px 0',
            margin: 0,
          }}
        >
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  // Desktop: fixed row with arrows
  return (
    <div style={{ marginLeft: '80px', marginTop: '30px', position: 'relative' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '12px', color: 'white' }}>
        {title}
      </h2>

      <button
        onClick={handlePrev}
        disabled={index === 0}
        style={styles.arrowLeft}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleNext}
        disabled={index >= totalPages - 1}
        style={styles.arrowRight}
      >
        <ChevronRight />
      </button>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${index * 100}%)`,
          overflow: 'hidden',
        }}
      >
        {movies.slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage).map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  arrowLeft: {
    position: 'absolute',
    left: '-40px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.6)',
    border: 'none',
    borderRadius: '50%',
    padding: '8px',
    color: 'white',
    cursor: 'pointer',
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.6)',
    border: 'none',
    borderRadius: '50%',
    padding: '8px',
    color: 'white',
    cursor: 'pointer',
    zIndex: 10,
  },
  mobileArrowLeft: {
    position: 'absolute',
    left: '-13px',
    top: '60px',  // moved down
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    borderRadius: '50%',
    padding: '6px',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 10,
  },
  mobileArrowRight: {
    position: 'absolute',
    right: '8px',
    top: '60px',  // moved down
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    borderRadius: '50%',
    padding: '6px',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 10,
  },
};

export default SectionRow;
