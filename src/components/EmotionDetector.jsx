import React, { useState } from "react";

const EmotionDetector = ({ onEmotionDetected }) => {
  const [loading, setLoading] = useState(false);

  const captureMood = async () => {
    setLoading(true);

    // Simulating mood detection API response
    setTimeout(() => {
      const emotions = ["Happy", "Sad", "Excited", "Angry", "Relaxed"];
      const detectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];

      // Mock recommended movies for each emotion
      const movieRecommendations = {
        Happy: [
          { title: "Inside Out", image: "https://image-link.com/inside-out.jpg" },
          { title: "Soul", image: "https://image-link.com/soul.jpg" },
        ],
        Sad: [
          { title: "The Pursuit of Happyness", image: "https://image-link.com/pursuit.jpg" },
          { title: "A Beautiful Mind", image: "https://image-link.com/beautiful-mind.jpg" },
        ],
      };

      onEmotionDetected(detectedEmotion, movieRecommendations[detectedEmotion] || []);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="capture-container">
      <button className="capture-button" onClick={captureMood} disabled={loading}>
        {loading ? "Detecting..." : "Capture Mood"}
      </button>
    </div>
  );
};

export default EmotionDetector;
