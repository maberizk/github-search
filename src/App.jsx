import "./index.css";

function App() {
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
        <div className="searchBar">
          <input type="text" placeholder="Search Github username..."></input>
          <button>Search</button>
        </div>
        <div className="profile">
          <img src=""></img>
        </div>
      </div>
    </>
  );
}

export default App;
