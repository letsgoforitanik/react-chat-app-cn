import React, { useState } from "react";
import { ModalContext } from "../contexts/modalcontext";

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
