import { useContext } from "react";
import { ModalContext } from "../contexts/modalcontext";

// This custom hook is useful for wrapping a component inside a modal
// It also exposes utility functions to control the modal
// (like opening and closing of a modal) to consumers of the hook.
export function useModal(component) {
    const { setShowModal, setModalComponent } = useContext(ModalContext);

    function openModal() {
        document.body.classList.add("modal-open");
        setModalComponent(component);
        setShowModal(true);
    }

    function closeModal() {
        document.body.classList.remove("modal-open");
        setShowModal(false);
    }

    return { openModal, closeModal };
}
