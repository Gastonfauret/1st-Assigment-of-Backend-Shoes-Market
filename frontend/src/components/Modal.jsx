import { useState } from "react";
import NewUser from "./NewUser";
import '../styles/Modal.css'

function Modal() {
    const [open, setOpen] = useState(false);

    if(open) {
       return(
        <>
           <NewUser closeModal={() => setOpen(false)}/>
        </>
       )
    }

    return(
        <button onClick={() => setOpen(true)} className="add-button">+</button>
    )
}

export default Modal;