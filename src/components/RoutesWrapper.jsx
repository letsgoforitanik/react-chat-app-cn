import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Chats, Home } from "../pages";

export default function RoutesWrapper() {
    return (
        <Router>
            <Routes>
                <Route path="/chats" element={<Chats />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
