import React, { useContext } from "react";
// import jet3 from "../assets/jet3.jpg";
import "../assets/css/card.css";
import { ThemeContext } from "../context/themeContext";

function Cockpit() {
  const theme = useContext(ThemeContext);
  console.log("theme:", theme);

  return (
    <div className={`card-container-${theme}`}>
      {/* <img src={props.imageUrl} alt="" width={200} height={100} /> */}
      <h2>Chin Tapk Chin </h2>

      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>hhgfjf</li>
      </ul>
      <h1>{theme}</h1>

    </div>
  );
}

export default Cockpit;
