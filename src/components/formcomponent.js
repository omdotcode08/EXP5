import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    dob: "",
    mobile: "",
    gender: "",
    domain: "",
    college: "",
    courseLevel: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const currentDate = new Date().toISOString().split("T")[0];

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format (e.g., abc@abc.com)";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 1) {
      errors.age = "Age must be a valid number";
    }
    if (!formData.dob) {
      errors.dob = "Date of birth is required";
    } else if (formData.dob > currentDate) {
      errors.dob = "Date of birth cannot be in the future";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.domain) errors.domain = "Domain is required";
    if (!formData.college.trim()) errors.college = "College name is required";
    if (!formData.courseLevel) errors.courseLevel = "Course level is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/confirmation", { state: { formData } });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h1>CYBER SECURITY COURSE</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Domain</label>
          <select name="domain" value={formData.domain} onChange={handleChange}>
            <option value="">Select Domain</option>
            <option value="machine-learning">Malware Creation</option>
            <option value="data-science">DDoS attack</option>
            <option value="deep-learning">OSINT</option>
            <option value="llm-and-rag">Rubber Ducky</option>
            <option value="natural-language-processing">SQL injection</option>
            <option value="computer-vision">Networking and phishing attack</option>
            <option value="genai">GenAI</option>
          </select>
          {errors.domain && <span className="error">{errors.domain}</span>}
        </div>

        <div className="form-group">
          <label>College Name</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
          {errors.college && <span className="error">{errors.college}</span>}
        </div>

        <div className="form-group">
          <label>Course Level</label>
          <select
            name="courseLevel"
            value={formData.courseLevel}
            onChange={handleChange}
          >
            <option value="">Select Course Level</option>
            <option value="bootcamp">BootCamp</option>
            <option value="full-course">Full Course</option>
          </select>
          {errors.courseLevel && <span className="error">{errors.courseLevel}</span>}
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormComponent;