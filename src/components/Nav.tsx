import { Link } from "react-router-dom"; // import to allow nav to pages

import "./styles/nav.css";
const mmcLogo = "/assets/images/MMC.svg";

export default function Nav() {
  const linkStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };

  return (
    <nav className="main-header-menu">
      <h1>MMC Print & Packaging</h1>
      <a
        href="https://www.mullenconsulting.biz"
        target="_blank"
        rel="noreferrer">
        <img src={mmcLogo} className="logo" alt="MMC Logo" />
      </a>
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
        //   padding: "10px",
        //   margin: "10px",
        }}
      >
        <div style={linkStyle}>
          <Link to="/">About Me</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/portfolio">Porfolio</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/contact">Contact</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/resume">Resume</Link>
        </div>
      </section>
    </nav>
  );
}
