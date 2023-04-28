import { useContext } from "react";
import { ModalContext } from "../contexts/modalcontext";

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
