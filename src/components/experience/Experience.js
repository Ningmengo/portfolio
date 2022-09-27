import React from "react";
import "../experience/Experience.css";

const Experience = () => {
  return (
    <div className="Experience">
      experience
      <div className="MainContent">
        <h1>Sushi Maker, Sakura Garden</h1>
        <h4>July 2019 to January 2020, North York, Ontario</h4>
        <ul>
          <li>Started learning to make sushi and rolls.</li>
          <li>Self-learning front-end programming languages.</li>
        </ul>

        <h4>January 2020 to July 2022, North York, Ontario</h4>
        <ul>
          <li>
            Created small application for the business to better manage their
            inventory.
          </li>
          <li>Created custom theme using CSS, bootstrap, material ui.</li>
          <li>Made rolls and sushi for customers.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
