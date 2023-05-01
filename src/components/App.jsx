import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { store } from "../store";
import { ModalProvider } from "../providers/ModalProvider";
import { MainWrapper } from "../components";
import { Chats, Home } from "../pages";

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ModalProvider>
                    <Routes>
                        <Route path="/" element={<MainWrapper />}>
                            <Route path="" element={<Home />} />
                            <Route path="users/:userId/conversations" element={<Chats />} />
                        </Route>
                    </Routes>
                </ModalProvider>
            </Provider>
        </BrowserRouter>
    );
}
