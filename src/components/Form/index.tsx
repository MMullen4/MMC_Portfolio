import { useState, ChangeEvent, FormEvent } from "react";
import "./style.css";

// Define stricter types for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
        setFormData({ firstName: "", lastName: "", email: "" });
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

      <button type="submit">Submit</button>
    </form>
  );
}


// interface FormState {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// export default function Form(): React.ReactNode {
//   // using single state object
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleInputChange}
//         placeholder="First Name"
//       />
//       <input
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleInputChange}
//         placeholder="Last Name"
//       />
//       <input
//         type="text"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         placeholder="Email"
//       />
//       <button type="submit">Submit</button>
//     </form>
    
//   );
// }
