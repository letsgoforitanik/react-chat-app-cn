import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Chats, Home } from "../pages";
import { Sidebar } from "../components";
import { useDispatch } from "react-redux";
import { usersFetchThunk } from "../store/usersFetchthunk";

export default function MainWrapper() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(usersFetchThunk) && undefined, []);

    return (
        <div className="main-layout">
            <Sidebar />
            <main className="main main-visible">
                <Router>
                    <Routes>
                        <Route path="/chats" element={<Chats />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}
