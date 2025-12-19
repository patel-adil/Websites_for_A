import React, { useState } from 'react';
import './App.css';

const messages = [
  {
    id: 1,
    title: "My Heart Belongs to You 💖",
    message: "My dearest Ashiya, you are the melody in my heart and the poetry in my soul. Every beat of my heart whispers your name, and every breath I take is filled with thoughts of you. You are not just my love, you are my home.",
    emoji: "💕",
    color: "#ff6b9d"
  },
  {
    id: 2,
    title: "The Most Beautiful Soul 🌹",
    message: "Ashiya, your beauty is beyond words. But what truly captivates me is your beautiful soul - your kindness that touches everyone, your gentle heart that knows no bounds, and your radiant spirit that lights up even the darkest days. You are ethereal, my love.",
    emoji: "🌺",
    color: "#ff1493"
  },
  {
    id: 3,
    title: "My Forever Person 💑",
    message: "In you, I found not just a lover, but my best friend, my confidant, my partner in all of life's adventures. With you, every ordinary moment becomes extraordinary. You are my person, Ashiya, in this life and every one after.",
    emoji: "💑",
    color: "#ff69b4"
  },
  {
    id: 4,
    title: "You Are My Sunshine ☀️",
    message: "Ashiya, your smile is the sun that brightens my darkest days. Your laughter is music to my ears, and your presence is the warmth that fills my heart. You bring so much light and joy into my world, and I am endlessly grateful for you.",
    emoji: "✨",
    color: "#ffb6c1"
  },
  {
    id: 5,
    title: "My Greatest Blessing 🙏",
    message: "I thank the universe every day for bringing you into my life. You are my greatest blessing, my answered prayer, my dream come true. Thank you for choosing to love me, for seeing the best in me, and for being my anchor in this world.",
    emoji: "🌟",
    color: "#ffc0cb"
  },
  {
    id: 6,
    title: "Eternally Yours 💍",
    message: "Ashiya, I promise to love you through all the seasons of life - in spring's bloom, summer's heat, autumn's change, and winter's cold. I will stand by you, support you, and cherish you forever. You have my heart, now and always.",
    emoji: "💒",
    color: "#ff91a4"
  },
  {
    id: 7,
    title: "You Amaze Me Daily 🌟",
    message: "Every day, I discover something new to love about you - your strength in adversity, your intelligence that inspires me, your compassion that moves me, your grace that awes me. You are a masterpiece, Ashiya, and I am honored to love you.",
    emoji: "💎",
    color: "#ffd1dc"
  },
  {
    id: 8,
    title: "Infinite Love 💝",
    message: "I love you more than all the stars in the universe, more than all the grains of sand on every beach, more than all the raindrops in every storm. My love for you is infinite, endless, and eternal. You are my everything, Ashiya. I love you beyond measure.",
    emoji: "💖",
    color: "#ffb3ba"
  }
];

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [clickedMessages, setClickedMessages] = useState(new Set());
  const [confetti, setConfetti] = useState([]);
  const [showSurprise, setShowSurprise] = useState(false);

  // Create confetti particles
  const createConfetti = (x, y) => {
    const particles = [];
    const colors = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '✨', '🌟', '💫'];
    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 5 + Math.random() * 10;
      particles.push({
        id: Date.now() + i,
        emoji: colors[Math.floor(Math.random() * colors.length)],
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      });
    }
    setConfetti(particles);
    setTimeout(() => setConfetti([]), 3000);
  };

  const handleMessageClick = (message, event) => {
    // Get click position for confetti
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create confetti explosion!
    createConfetti(x, y);
    
    setSelectedMessage(message);
    setClickedMessages(prev => new Set(prev).add(message.id));
    
    // Surprise on 3rd message click
    if (clickedMessages.size === 2) {
      setShowSurprise(true);
      setTimeout(() => setShowSurprise(false), 5000);
    }
    
    // Auto-close after 8 seconds
    setTimeout(() => {
      setSelectedMessage(null);
    }, 8000);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="App">
      {/* Floating Hearts Background */}
      <div className="hearts-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="floating-heart" style={{ '--delay': i * 0.5 + 's', '--left': Math.random() * 100 + '%' }}>
            ❤️
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="sparkle" style={{ '--delay': i * 0.3 + 's', '--left': Math.random() * 100 + '%', '--top': Math.random() * 100 + '%' }}>
            ✨
          </div>
        ))}
      </div>

      {/* Moving Butterflies */}
      <div className="butterflies-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="butterfly" style={{ '--delay': i * 2 + 's', '--duration': 15 + Math.random() * 10 + 's' }}>
            🦋
          </div>
        ))}
      </div>

      {/* Floating Roses */}
      <div className="roses-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="floating-rose" style={{ '--delay': i * 1.5 + 's', '--left': Math.random() * 100 + '%' }}>
            🌹
          </div>
        ))}
      </div>

      {/* Confetti Particles */}
      <div className="confetti-container">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="confetti-particle"
            style={{
              left: particle.x + 'px',
              top: particle.y + 'px',
              '--vx': particle.vx + 'px',
              '--vy': particle.vy + 'px',
              '--rotation': particle.rotation + 'deg',
              '--rotation-speed': particle.rotationSpeed + 'deg',
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>

      {/* Surprise Message */}
      {showSurprise && (
        <div className="surprise-message">
          <div className="surprise-content">
            <div className="surprise-emoji">🎉💖🎉</div>
            <h2>You Found Me!</h2>
            <p>Ashiya, you make my heart skip a beat every time! ❤️</p>
          </div>
        </div>
      )}

      <div className="header">
        <h1 className="main-title">For My Beautiful Ashiya</h1>
        <p className="subtitle">Click on any message to read my heart ❤️</p>
        <div className="heart-divider">💕 💕 💕</div>
      </div>

      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`message-card slide-in ${clickedMessages.has(msg.id) ? 'clicked' : ''}`}
            onClick={(e) => handleMessageClick(msg, e)}
            style={{ '--card-color': msg.color, '--slide-delay': index * 0.15 + 's' }}
          >
            <div className="card-emoji">{msg.emoji}</div>
            <div className="card-title">{msg.title}</div>
            <div className="card-hint">Click to read →</div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>

      {selectedMessage && (
        <div className="modal-overlay slide-in-overlay" onClick={closeModal}>
          <div className="modal-content slide-in-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="modal-emoji">{selectedMessage.emoji}</div>
            <h2 className="modal-title">{selectedMessage.title}</h2>
            <p className="modal-message">{selectedMessage.message}</p>
            <div className="modal-hearts">💖 💕 💖</div>
            <div className="modal-signature">With all my love, forever and always ❤️</div>
            <div className="modal-particles">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="modal-particle" style={{ '--particle-delay': i * 0.1 + 's' }}>✨</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="footer">
        <p>Made with ❤️ for Ashiya</p>
      </div>
    </div>
  );
}

export default App;

