import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (form.name.trim().length <= 5) {
      errors.name = "El nombre debe tener más de 5 caracteres.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "El email no es válido.";
    }
    return errors;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    onSubmit(form); // Llama al callback `onSubmit` para comunicar a `Contact` los datos del formulario
  };

  return (
    <div>
      {submitted ? (
        <p>Gracias {form.name}, te contactaremos cuando antes vía mail.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <button type="submit">Enviar</button>
          {Object.keys(errors).length > 0 && (
            <p style={{ color: "red" }}>Por favor verifique su información nuevamente.</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
