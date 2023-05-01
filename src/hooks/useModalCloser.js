import { useContext } from "react";
import { ModalContext } from "../contexts/modalcontext";

// This custom hook exposes a function to close the currently opened modal
// The component which has been wrapped by the modal can use the function
// to close the modal when required.
export function useModalCloser() {
    const { setShowModal } = useContext(ModalContext);

    return function () {
        setShowModal(false);
        document.body.classList.remove("modal-open");
    };
}
