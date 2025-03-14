import { FC } from "react";
import { Link } from "react-router-dom";

const About: FC = () => {
  // export default function About(): React.ReactNode {
  return (
    <div>
      <h1>About Me</h1>
      <h1>Matt Mullen</h1>
      <h2>Owner</h2>
      <div className="card>">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="./assets/images/MM.jpg"
          alt="Matt Mullen pic"
        />
        <p>
          About MMC Print & Packaging - With over 20 years in Paperboard
          manufacturing & sales to a wide array of printers, packagers, and
          various converters of paperboard, Matt brings his industry experience
          and knowledge to find solutions for clients that satisfy their need to
          expand and penetrate target markets. In his spare time, Matt enjoys
          the outdoors with his family.
        </p>
      </div>
      <Link
        to="https://www.linkedin.com/in/matthewmullen1/"
        target="_blank"
        rel="noopener moreferrer"
      >
        LinkedIn
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
      <Link
        to="https://github.com/MMullen4"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="mercado-match"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </div>
  );
};
export default About;
