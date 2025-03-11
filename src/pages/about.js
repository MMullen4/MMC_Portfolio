import { Link } from 'react-router-dom';  

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>My name is Matt Mullen. I am a full-stack web developer. I am currently enrolled in the University of Florida's Full Stack Coding Bootcamp.</p>
            <Link to="/">Go back to the homepage</Link>
            <Link to="https://www.linkedin.com/in/matthewmullen1/">Linkedin</Link>

        </div>
    );

}