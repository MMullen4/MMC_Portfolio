import { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";

// Define stricter types for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Add form validation state
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.length < 5) {
      newErrors.message = "Message must be at least 5 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Add your form submission logic here
        console.log(formData);
        // Reset form after successful submission
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className={errors.firstName ? "error" : ""}
          aria-label="First Name"
        />
        {errors.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className={errors.lastName ? "error" : ""}
          aria-label="Last Name"
        />
        {errors.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={errors.email ? "error" : ""}
          aria-label="Email"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className={errors.message ? "error" : ""}
          aria-label="Message"
          rows={4}
        />
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
