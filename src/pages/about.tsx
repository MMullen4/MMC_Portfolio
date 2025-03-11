import { Link } from "react-router-dom";

interface AboutProps {}

export default function About(): JSX.Element {
  return (
    <div>
      <h1>About Me</h1>
      <article>
        <h1>Matt Mullen</h1>
        <h2>Owner</h2>
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="./assets/images/MM.jpg"
          alt="Matt Mullen pic"
        />
        <p>
          With over 20 years in Paperboard manufacturing & sales to a wide array
          of printers, packagers, and various converters of paperboard, Matt
          brings his industry experience and knowledge to find solutions for
          clients that satisfy their need to expand and penetrate target
          markets. In his spare time, Matt enjoys the outdoors with his family.
        </p>
      </article>
      <a
        href="https://www.linkedin.com/in/matthewmullen1/"
        target="_blank"
        rel="noopener moreferrer"
      >
        LinkedIn
      </a>
      {/* <Link to="https://www.linkedin.com/in/matthewmullen1/">LinkedIn</Link>*/}
    </div>
  );
}
