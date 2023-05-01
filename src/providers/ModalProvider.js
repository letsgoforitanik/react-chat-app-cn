import React, { useState } from "react";
import { ModalContext } from "../contexts/modalcontext";

// Useful modal controlling functionalities are passed down
// to every wrapped component using this provider.
// It abstracts all the logic related to ModalContext.Provider
export function ModalProvider({ children }) {
    const [modalComponent, setModalComponent] = useState(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider value={{ setShowModal, setModalComponent }}>
            {children}
            {showModal && <div className="md-overlay">{modalComponent}</div>}
        </ModalContext.Provider>
    );
}
