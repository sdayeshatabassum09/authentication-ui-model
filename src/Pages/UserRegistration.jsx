import { useState } from "react";

import UserForm from "../components/UserForm";

import {
  initialFormData
} from "../constants/formConstants";

import {
  validateForm
} from "../utils/validation";

import {
  registerUserAPI
} from "../services/userService";

function UserRegistration() {

  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] =
    useState({});

  const [termsAccepted, setTermsAccepted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [userId, setUserId] =
    useState(null);

  const [serverError, setServerError] =
    useState("");


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));

    setServerError("");
  };


  const handleTermsChange = (e) => {

    setTermsAccepted(e.target.checked);

    setErrors((previous) => ({
      ...previous,
      terms: ""
    }));
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccessMessage("");
    setServerError("");
    setUserId(null);


    if (loading) {
      return;
    }


    const validationErrors =
      validateForm(
        formData,
        termsAccepted
      );


    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      return;
    }


    setLoading(true);


    try {

      const response =
        await registerUserAPI(formData);


      if (response.status === "SUCCESS") {

        setSuccessMessage(
          response.message
        );

        setUserId(
          response.userId
        );


        setFormData(initialFormData);

        setTermsAccepted(false);

        setErrors({});
      }

    } catch (error) {

      setServerError(
        error.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="page">

      <div className="registration-container">

        <h1>
          User Registration
        </h1>

        <p className="subtitle">
          Please enter your details
        </p>


        {successMessage && (

          <div className="success">

            {successMessage}

            <br />

            User ID: <strong>{userId}</strong>

          </div>

        )}


        {serverError && (

          <div className="server-error">

            {serverError}

          </div>

        )}


        <UserForm
          formData={formData}
          errors={errors}
          termsAccepted={termsAccepted}
          loading={loading}
          onChange={handleChange}
          onTermsChange={handleTermsChange}
          onSubmit={handleSubmit}
        />

      </div>

    </div>
  );
}

export default UserRegistration;