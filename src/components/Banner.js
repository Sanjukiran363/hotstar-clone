import React, { useEffect, useState } from 'react';

const teasers = [
  {
    id: 1,
    title: 'Raja Saab',
    videoSrc: '/videos/rajasab.mp4',
    thumbnail: '/thumbnails/specialops.jpg',
    year: '2025',
    rating: 'U/A 13+',
    duration: '1h 52m',
    languages: '5 Languages',
    description:
      '"Raja Saab" is an Indian Telugu-language horror-comedy starring Prabhas, directed by Maruthi.',
    tags: ['Horror-Comedy', 'Drama', 'Fantasy'],
  },
  {
    id: 2,
    title: 'Kill',
    videoSrc: '/videos/Kill.mp4',
    thumbnail: '/thumbnails/kill.jpg',
    year: '2025',
    rating: 'A',
    duration: '1h 45m',
    languages: '3 Languages',
    description:
      '"Kill" is an intense action thriller where a commando goes rogue inside a moving train to save his loved one.',
    tags: ['Action', 'Thriller', 'Revenge'],
  },
  {
    id: 3,
    title: 'Baapu',
    videoSrc: '/videos/baapu.mp4',
    thumbnail: '/thumbnails/baapu.jpg',
    year: '2025',
    rating: 'U/A 13+',
    duration: '1h 52m',
    languages: '5 Languages',
    description:
      "Mallanna's father decides to trade his life to secure relief funds for the family, but forgets. Funding for his final days, how will they make the ends meet?",
    tags: ['Drama', 'Father-Son', 'True Story'],
  },
  {
    id: 4,
    title: 'Man Plan',
    videoSrc: '/videos/manplan.mp4',
    thumbnail: '/thumbnails/manplan.png',
    year: '2025',
    rating: 'U',
    duration: '2h 00m',
    languages: '4 Languages',
    description:
      '"Man Plan" is a humorous and heartwarming story of a man juggling family, friends, and personal goals in unexpected ways.',
    tags: ['Comedy', 'Feel-Good', 'Family'],
  },
];

const Banner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentTeaser, setCurrentTeaser] = useState(teasers[0]);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);
  const switchTeaser = (teaser) => setCurrentTeaser(teaser);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      {/* 🔝 Promo Banner */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          background: 'rgba(10, 10, 10, 0.9)',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          margin: '20px',
          overflow: 'hidden',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? '12px' : '0',
        }}
      >
        <img
          src="/images/eng-vs-ind-banner.png"
          alt="Match Banner"
          style={{ width: isMobile ? '100%' : '240px', borderRadius: '6px' }}
        />
        <div style={{ marginLeft: isMobile ? '0' : '16px' }}>
          <h4 style={{ margin: 0, color: '#ccc', fontSize: '0.95rem' }}>India Tour of England</h4>
          <h2 style={{ margin: '6px 0', fontSize: isMobile ? '1.1rem' : '1.3rem' }}>
            India Vs England The Ultimate Test Battle Returns
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Today, 2:30 PM</p>
          <button
            style={{
              marginTop: '10px',
              backgroundColor: '#1f1f1f',
              color: '#fff',
              padding: '8px 16px',
              border: '1px solid #444',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Explore
          </button>
        </div>
      </div>

      {/* 🎥 Main Video Section */}
      <div
        style={{
          position: 'relative',
          height: isMobile ? '50vh' : '75vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <video
          key={currentTeaser.id}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <source src={currentTeaser.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 📝 Overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            padding: isMobile ? '20px' : '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
            color: '#fff',
          }}
        >
          <h1 style={{ fontSize: isMobile ? '2rem' : '3.5rem', fontWeight: 'bold', marginBottom: '12px' }}>
            {currentTeaser.title}
          </h1>

          <div style={{ fontSize: '0.9rem', display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <span style={badgeStyle}>{currentTeaser.year}</span>
            <span style={badgeStyle}>{currentTeaser.rating}</span>
            <span style={badgeStyle}>{currentTeaser.duration}</span>
            <span style={badgeStyle}>{currentTeaser.languages}</span>
          </div>

          <p
            style={{
              fontSize: '1rem',
              maxWidth: '600px',
              lineHeight: '1.6',
              marginBottom: '16px',
              color: '#ddd',
            }}
          >
            {currentTeaser.description}
          </p>

          <div style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '20px' }}>
            {currentTeaser.tags.map((tag, i) => (
              <strong key={i}>
                {tag}
                {i !== currentTeaser.tags.length - 1 && ' • '}
              </strong>
            ))}
          </div>

          <button
            style={{
              padding: '12px 28px',
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              width: 'fit-content',
              cursor: 'pointer',
            }}
          >
            ▶ Watch Now
          </button>
        </div>

        {/* 🔇 Mute Toggle */}
        <button
          onClick={toggleMute}
          style={{
            position: 'absolute',
            bottom: isMobile ? '70px' : '120px',
            right: isMobile ? '20px' : '30px',
            zIndex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            width: isMobile ? '34px' : '40px',
            height: isMobile ? '34px' : '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          <img
            src={isMuted ? '/icons/mute.png' : '/icons/unmute.png'}
            alt={isMuted ? 'Muted' : 'Unmuted'}
            style={{
              width: '22px',
              height: '22px',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </button>

        {/* 🖼️ Teaser Thumbnails */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '24px',
            display: 'flex',
            gap: '10px',
            zIndex: 2,
            overflowX: 'auto',
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          {teasers.map((teaser) => (
            <img
              key={teaser.id}
              src={teaser.thumbnail}
              alt={teaser.title}
              onClick={() => switchTeaser(teaser)}
              style={{
                width: isMobile ? '80px' : '100px',
                height: isMobile ? '50px' : '60px',
                borderRadius: '6px',
                cursor: 'pointer',
                border: teaser.id === currentTeaser.id ? '2px solid #fff' : 'none',
                opacity: teaser.id === currentTeaser.id ? 1 : 0.8,
                transition: 'all 0.2s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 🔖 Small badge reusable style
const badgeStyle = {
  backgroundColor: '#444',
  padding: '4px 8px',
  borderRadius: '4px',
};

export default Banner;
