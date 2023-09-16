import React, { useState } from "react";
import "../styles/NewUser.css";

function NewUser({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    image: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeNumericValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <div className="modal-background">
      <form onSubmit={handleSubmit} className="new-modal-container">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={handleChangeNumericValue}
        />
        <input
          type="text"
          name="image"
          placeholder="Url"
          value={formData.image}
          onChange={handleChange}
        />
        <div className="modal-buttons__container">
          <button type="submit">Agregar</button>
          <button type="cancel" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
