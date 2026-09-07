import InputField from "./InputField";
import SelectField from "./SelectField";

import {
  genders,
  states
} from "../constants/formConstants";

function UserForm({
  formData,
  errors,
  termsAccepted,
  loading,
  onChange,
  onTermsChange,
  onSubmit
}) {

  return (
    <form onSubmit={onSubmit}>

      <InputField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
        error={errors.fullName}
        required={true}
        maxLength={100}
      />

      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
        required={true}
        maxLength={150}
      />

      <InputField
        label="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={onChange}
        error={errors.mobileNumber}
        required={true}
        maxLength={10}
      />

      <InputField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={onChange}
        error={errors.dateOfBirth}
      />

      <SelectField
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={onChange}
        options={genders}
        error={errors.gender}
        required={true}
      />

      <div className="form-group">

        <label htmlFor="address">
          Address *
        </label>

        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={onChange}
          maxLength={250}
        />

        {errors.address && (
          <span className="error">
            {errors.address}
          </span>
        )}

      </div>

      <InputField
        label="City"
        name="city"
        value={formData.city}
        onChange={onChange}
        error={errors.city}
        required={true}
        maxLength={50}
      />

      <SelectField
        label="State"
        name="state"
        value={formData.state}
        onChange={onChange}
        options={states}
        error={errors.state}
        required={true}
      />

      <InputField
        label="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={onChange}
        error={errors.pincode}
        required={true}
        maxLength={6}
      />

      <div className="terms">

        <input
          id="terms"
          type="checkbox"
          checked={termsAccepted}
          onChange={onTermsChange}
        />

        <label htmlFor="terms">
          I Accept The Terms & Conditions *
        </label>

      </div>

      {errors.terms && (
        <span className="error">
          {errors.terms}
        </span>
      )}

      <button
        type="submit"
        disabled={loading}
      >

        {loading
          ? "Submitting..."
          : "Submit"
        }

      </button>

    </form>
  );
}

export default UserForm;