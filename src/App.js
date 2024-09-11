import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by Dikamogelo Mabusela and is open-sourced on{" "}
          <a
            href="https://github.com/DikamogeloM/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
