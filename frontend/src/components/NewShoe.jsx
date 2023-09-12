import React, { useState } from "react";
import "../styles/NewUser.css";

function NewShoe({ closeModal }) {
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    precio: "",
    talle: "",
    imagen: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch("http://localhost:3080/shoes", {
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
        console.log(formData)
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
          name="marca"
          placeholder="marca"
          value={formData.marca}
          onChange={handleChange}
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
        />
        <input
          type="text"
          name="talle"
          placeholder="Talle"
          value={formData.talle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imagen"
          placeholder="Url"
          value={formData.imagen}
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

export default NewShoe;