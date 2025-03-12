import { JSX } from 'react';
import Form from '../components/Form';

interface ContactProps {

}

export default function Contact(): JSX.Element {
    return (
        <div>
            <h1>Contact Me</h1>
            <Form />
        </div>
    );
}