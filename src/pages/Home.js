import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import backgroundImage from "../assets/photo.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="prompt">
          <p>I am Nam Ngo, a web developer with a passion for creating</p>
        </div>
      </div>
      <div className="skills">
        <h1> Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programming</h2>
            <span>
            Java, Python, C++, C#, SQL, JavaScript, React, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Office</h2>
            <span>
            Microsoft Suites, OS, Linux, PowerShell, AI
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
