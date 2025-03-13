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
          About MMC Print & Packaging - With over 20 years in Paperboard manufacturing & sales to a wide array
          of printers, packagers, and various converters of paperboard, Matt
          brings his industry experience and knowledge to find solutions for
          clients that satisfy their need to expand and penetrate target
          markets. In his spare time, Matt enjoys the outdoors with his family.
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
    </div>
  );
};
export default About;
