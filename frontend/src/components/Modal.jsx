import { useState } from "react";
import NewUser from "./NewUser";
import "../styles/Modal.css";
import { useCurrentPage } from "./ProviderContext";
import NewShoe from "./NewShoe";
import NewClothe from "./NewClothe";

function Modal() {
  const currentPage = useCurrentPage();
  const [open, setOpen] = useState(false);

  if (open) {
    switch (currentPage) {
      case "users":
        return <NewUser closeModal={() => setOpen(false)} />;
        break;
      case "shoes":
        return <NewShoe closeModal={() => setOpen(false)} />;
        break;
      case "clothes":
        return <NewClothe closeModal={() => setOpen(false)} />;
        break;
      default:
        console.log("idk");
    }
  }

  return (
    <button onClick={() => setOpen(true)} className="add-button">
      +
    </button>
  );
}

export default Modal;
