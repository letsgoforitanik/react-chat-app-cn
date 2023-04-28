import React from "react";
import Sidebar from "./Sidebar";
import { RoutesWrapper } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";
import { ModalProvider } from "../providers/ModalProvider";

export default function App() {
    return (
        <Provider store={store}>
            <ModalProvider>
                <div className="main-layout">
                    <Sidebar />
                    <main className="main main-visible">
                        <RoutesWrapper />
                    </main>
                </div>
            </ModalProvider>
        </Provider>
    );
}
