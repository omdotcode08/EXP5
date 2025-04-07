import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div className="confirmation-container">
      <h1>Registration Confirmed!</h1>
      <div className="confirmation-card">
        <h2>Registration Details</h2>
        <div className="details-grid">
          <div><strong>First Name:</strong> {formData.firstName}</div>
          <div><strong>Last Name:</strong> {formData.lastName}</div>
          <div><strong>Email:</strong> {formData.email}</div>
          <div><strong>Age:</strong> {formData.age}</div>
          <div><strong>Date of Birth:</strong> {formData.dob}</div>
          <div><strong>Mobile Number:</strong> {formData.mobile}</div>
          <div><strong>Gender:</strong> {formData.gender}</div>
          <div><strong>Domain:</strong> {formData.domain}</div>
          <div><strong>College Name:</strong> {formData.college}</div>
          <div><strong>Course Level:</strong> {formData.courseLevel}</div>
        </div>
        <button className="back-btn" onClick={() => window.history.back()}>
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;