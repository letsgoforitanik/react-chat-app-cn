import { useContext } from "react";
import { ModalContext } from "../contexts/modalcontext";

export function useModalCloser() {
    const { setShowModal } = useContext(ModalContext);

    return function () {
        setShowModal(false);
        document.body.classList.remove("modal-open");
    };
}
