import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [flying, setFlying] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setFlying(true);

    // 🎵 Play sound
    const likeAudio = new Audio(process.env.PUBLIC_URL + 'like-sound.mp3.mp3');
    likeAudio.play();

    setTimeout(() => setFlying(false), 600);
  };

  return (
    <div className="like-button-wrapper">
      <div className={`flying-heart ${flying ? 'active' : ''}`}>❤️</div>
      <tr></tr><tr></tr><p className="like-text">LIKE BUTTON </p>
      <button onClick={handleLike}>👍 Like</button>
      <p className="like-text">
        You liked this <span className="like-count">{likes}</span> time{likes !== 1 ? 's' : ''}.
      </p>
    </div>
  );
}

export default LikeButton;
