import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/DikamogeloM"
            target="_blank"
            rel="noopener noreferrer "
          >
            Dikamogelo Mabusela
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/DikamogeloM/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github,{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/clinquant-bonbon-5d1d6d/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
