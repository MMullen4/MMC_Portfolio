import { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setEmail(value);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName} ${email}`);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName} {email}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
