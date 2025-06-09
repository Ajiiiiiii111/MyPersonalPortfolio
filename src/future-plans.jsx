import React from "react";
import "./futurePlans.css";

const futurePlans = [
  "Launch a mobile app for challenges",
  "Add community leaderboard and rewards",
  "Integrate social sharing features",
  "Offer personalized challenge recommendations",
];

const FuturePlans = () => {
  return (
    <section className="future-plans">
      <h2>Future Plans</h2>
      <ul>
        {futurePlans.map((plan, idx) => (
          <li key={idx} className="plan-item">
            {plan}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FuturePlans;
