import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError('Failed to fetch data.');
      }
    };
    fetchData();
  }, []);

  const handleReadMore = (card) => {
    setSelectedCard(card);
    
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.thumbnailUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <button onClick={() => handleReadMore(card)}>Read More</button>
          </div>
        ))}
      </div>
      {isModalOpen && <Modal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
