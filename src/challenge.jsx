import React from 'react';


const challenges = [
  {
    id: 1,
    title: '30-Day Coding Challenge',
    description: 'Solve one coding problem every day for 30 days.',
  },
  {
    id: 2,
    title: 'Fitness Challenge',
    description: 'Complete a daily workout routine for 2 weeks.',
  },
  {
    id: 3,
    title: 'Reading Challenge',
    description: 'Read one book every month for 6 months.',
  },
  {
    id: 4,
    title: 'Meditation Challenge',
    description: 'Meditate 10 minutes daily for 21 days.',
  },
];

const ChallengeSection = () => {
  return (
    <section className="challenge-section">
      <h2>Our Challenges</h2>
      <div className="challenge-grid">
        {challenges.map(({ id, title, description }) => (
          <div key={id} className="challenge-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeSection;
