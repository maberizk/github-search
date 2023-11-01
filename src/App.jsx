import "./index.css";
import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";
function App() {
  const [username, setUsername] = useState("octocat");
  const [theme, setTheme] = useState("dark");

  function switchTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <>
      <div
        className="app"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
        }}
      >
        <div
          className="body"
    
        >
          <div className="heading">
            <h1>devFinder</h1>
            {theme === "light" ? (
              <div className="buttonDiv">
                <button
                  onClick={switchTheme}
                  className="themeBtn"
                  style={{
                    color: "var(--button-text)",
                  }}
                >
                  Dark
                </button>
                <img src={moonIcon} alt="moon" className="themeIcon"/>
              </div>
            ) : (
              <div className="buttonDiv">
                <button onClick={switchTheme} className="themeBtn">
                  Light
                </button>
                <img src={sunIcon} alt="sun" className="themeIcon" />
              </div>
            )}
          </div>
          <SearchBar setUsername={setUsername} />
          <Profile username={username} />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
