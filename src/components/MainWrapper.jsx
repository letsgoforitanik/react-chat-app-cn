import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

export default function MainWrapper() {
    return (
        <div className="main-layout">
            <Sidebar />
            <main className="main main-visible">
                <Outlet />
            </main>
        </div>
    );
}
