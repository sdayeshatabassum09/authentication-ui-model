import {
  useId,
  useRef,
  useState
} from "react";

function Contact() {

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();

  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] =
    useState(false);

  const handleChange = e => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setSuccess(false);
  };

  const validate = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email =
        "Enter a valid email";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10 digit phone number";
    }

    if (form.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {

    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSuccess(true);

    setErrors({});

    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="page">

      <div className="page-heading center">

        <p className="small-title">
          CONTACT
        </p>

        <h1>
          Get In Touch
        </h1>

        <p>
          Have a question?
          Send us a message.
        </p>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor={nameId}>
            Name
          </label>

          <input
            ref={nameRef}
            id={nameId}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="field-error">
              {errors.name}
            </p>
          )}

        </div>

        <div className="form-group">

          <label htmlFor={emailId}>
            Email
          </label>

          <input
            id={emailId}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="field-error">
              {errors.email}
            </p>
          )}

        </div>

        <div className="form-group">

          <label htmlFor={phoneId}>
            Phone Number
          </label>

          <input
            id={phoneId}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            maxLength="10"
            placeholder="10 digit number"
          />

          {errors.phone && (
            <p className="field-error">
              {errors.phone}
            </p>
          )}

        </div>

        <div className="form-group">

          <label htmlFor={messageId}>
            Message
          </label>

          <textarea
            id={messageId}
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Enter your message"
          />

          {errors.message && (
            <p className="field-error">
              {errors.message}
            </p>
          )}

        </div>

        <button
          type="submit"
          className="btn primary large"
        >
          Submit
        </button>

        <button
          type="button"
          className="btn secondary"
          onClick={() =>
            nameRef.current.focus()
          }
        >
          Focus Name
        </button>

        {success && (

          <div className="success">
            ✓ Message submitted successfully!
          </div>

        )}

      </form>

    </section>
  );
}

export default Contact;