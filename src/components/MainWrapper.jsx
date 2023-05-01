import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
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
                <Outlet />
            </main>
        </div>
    );
}
