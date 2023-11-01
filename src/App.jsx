import "./index.css";
import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function App() {
  const [username, setUsername] = useState("octocat");

  function switchTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    switchTheme("dark");
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
        <div className="heading">
          <h1>devFinder</h1>
          <button onClick={() => switchTheme("light")}>Light</button>
          <button onClick={() => switchTheme("dark")}>Dark</button>
        </div>
        <SearchBar setUsername={setUsername} />
        <Profile username={username} />{" "}
      </div>
    </>
  );
}

export default App;
