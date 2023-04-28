import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ModalProvider } from "../providers/ModalProvider";
import { MainWrapper } from "../components";

export default function App() {
    return (
        <Provider store={store}>
            <ModalProvider>
                <MainWrapper />
            </ModalProvider>
        </Provider>
    );
}
