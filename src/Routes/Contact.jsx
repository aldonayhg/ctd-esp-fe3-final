import React, { useContext } from "react";
import Form from "../Components/Form";

const Contact = () => {


  const handleSubmit = (formData) => {
    console.log("Datos del formulario enviados:", formData);
  };

  return (
    <div>
      <h1>Contacto</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Contact;
