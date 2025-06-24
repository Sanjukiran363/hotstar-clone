import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import SectionRow from './components/SectionRow';
import Footer from './components/Footer'; 


const continueWatching = [
  { title: "The Hunt Begins", image: "/posters/movie1.jpg" },
  { title: "Nightfall Protocol", image: "/posters/movie8.jpg" },
  { title: "The Dark Knight", image: "/posters/movie7.jpg" },
  { title: "Avengers Endgame", image: "/posters/movie6.jpg" },
  { title: "Titanic", image: "/posters/movie2.jpg" },
  { title: "Joker", image: "/posters/movie4.jpg" },
  { title: "Avatar", image: "/posters/movie3.jpg" },
  { title: "Gladiator", image: "/posters/movie9.jpg" },
];

const latestReleases = [
  { title: "Final Destination Bloodlines", image: "/posters/movie5.jpg" },
  { title: "Harry Potter", image: "/posters/movie10.jpg" },
  { title: "Lord of Rings", image: "/posters/movie11.jpg" },
  { title: "Fast and Furious 7", image: "/posters/movie12.jpg" },
  { title: "Jirassic World", image: "/posters/movie13.jpg" },
  { title: "Pirates of the Caribbean", image: "/posters/movie14.jpg" },
  { title: "Avengers Infinity War", image: "/posters/movie15.jpg" },
  { title: "John Wick", image: "/posters/movie16.jpg" },
  { title: "Mission: Impossible", image: "/posters/movie17.jpg" },
  { title: "Mad Max", image: "/posters/movie18.jpg" },
  { title: "Dune", image: "/posters/movie19.jpg" },
  { title: "Kalki 2898 AD", image: "/posters/movie20.png" },
  { title: "Deadpool & Wolverine", image: "/posters/movie21.jpg" },
  { title: "Thor love & Thunder", image: "/posters/movie22.jpg" },
  { title: "wakanda forever", image: "/posters/movie23.jpg" },
  { title: "transformers", image: "/posters/movie24.jpg" },
  { title: "The Marvels", image: "/posters/movie25.jpg" },
  { title: "Batman", image: "/posters/movie26.jpg" },
  { title: "Captain America Civil War", image: "/posters/movie27.jpg" },
  { title: "Kong vs Godzila", image: "/posters/movie28.jpg" },
  { title: "Spyder Man ", image: "/posters/movie29.jpg" },
  { title: "Shang-Chi", image: "/posters/movie30.jpg" },
  { title: "Doctor Strange", image: "/posters/movie31.jpg" },
  { title: "Justice League", image: "/posters/movie32.jpg" },
];

const actionMovies = [
  { title: "Warrior’s Path", image: "/posters/movie11.jpg" },
  { title: "Blade Echo", image: "/posters/movie12.jpg" },
  { title: "Iron Blitz", image: "/posters/movie13.jpg" },
  { title: "Shadow Rage", image: "/posters/movie14.jpg" },
  { title: "Death Protocol", image: "/posters/movie15.jpg" },
  { title: "Black Storm", image: "/posters/movie16.jpg" },
  { title: "Crimson Fury", image: "/posters/movie17.jpg" },
  { title: "Stealth Strike", image: "/posters/movie18.jpg" },
  { title: "Dominion Down", image: "/posters/movie19.jpg" },
  { title: "Rage Core", image: "/posters/movie20.png" },
  { title: "Takedown Delta", image: "/posters/movie11.jpg" },
  { title: "Operation Iron", image: "/posters/movie12.jpg" },
  { title: "Ghost Snare", image: "/posters/movie13.jpg" },
  { title: "Crimson Shift", image: "/posters/movie14.jpg" },
  { title: "Overdrive", image: "/posters/movie15.jpg" },
  { title: "Bullet Storm", image: "/posters/movie16.jpg" },
  { title: "Terminal Force", image: "/posters/movie17.jpg" },
  { title: "Storm Hammer", image: "/posters/movie18.jpg" },
  { title: "Battle Alert", image: "/posters/movie19.jpg" },
  { title: "Edge Command", image: "/posters/movie25.jpg" },
  { title: "Dark Parade", image: "/posters/movie11.jpg" },
  { title: "Phantom Raid", image: "/posters/movie12.jpg" },
  { title: "Metro Clash", image: "/posters/movie13.jpg" },
  { title: "Skyfall 2099", image: "/posters/movie14.jpg" },
];

const teluguMovies = [
  { title: "Pushpa: The Rise", image: "/posters/movie33.jpg" },
  { title: "RRR", image: "/posters/movie34.jpg" },
  { title: "Sarkaru Vaari Paata", image: "/posters/movie35.jpg" },
  { title: "Akhanda", image: "/posters/movie36.jpg" },
  { title: "Major", image: "/posters/movie37.jpg" },
  { title: "Bheemla Nayak", image: "/posters/movie38.jpeg" },
  { title: "Uppena", image: "/posters/movie39.jpg" },
  { title: "Shyam Singha Roy", image: "/posters/movie40.jpg" },
  { title: "Krack", image: "/posters/movie41.jpg" },
  { title: "Vakeel Saab", image: "/posters/movie42.jpg" },
  { title: "Seetimaarr", image: "/posters/movie43.jpg" },
  { title: "Love Story", image: "/posters/movie44.jpg" },
  { title: "Konda Polam", image: "/posters/movie45.jpg" },
  { title: "Wild Dog", image: "/posters/movie46.jpg" },
  { title: "Red", image: "/posters/movie47.jpg" },
  { title: "Jathi Ratnalu", image: "/posters/movie48.jpg" },
  { title: "Most Eligible Bachelor", image: "/posters/movie56.jpg" },
  { title: "Tuck Jagadish", image: "/posters/movie49.jpg" },
  { title: "Bangarraju", image: "/posters/movie50.jpg" },
  { title: "Godfather", image: "/posters/movie51.jpg" },
  { title: "Dasara", image: "/posters/movie52.jpg" },
  { title: "Agent", image: "/posters/movie53.jpeg" },
  { title: "Salaar", image: "/posters/movie54.jpg" },
  { title: "Kalki 2898 AD", image: "/posters/movie20.png" },
];
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        color: 'white',
        display: isMobile ? 'block' : 'flex',
        overflowX: 'hidden',
      }}
    >
      {/* Always mount Sidebar: it will render left-bar or bottom-bar depending on isMobile */}
      <Sidebar />

      <div
        style={{
          marginLeft: isMobile ? '0' : '60px',
          width: '100%',
          overflowX: 'hidden',
          padding: isMobile ? '10px' : '0',
        }}
      >
        <Banner />
        <SectionRow title="Continue Watching" movies={continueWatching} />
        <SectionRow title="Latest Releases" movies={latestReleases} />
        <SectionRow title="Action Movies" movies={actionMovies} />
        <SectionRow title="Telugu Films" movies={teluguMovies} />
        <Footer />
      </div>
    </div>
  );
}

export default App;