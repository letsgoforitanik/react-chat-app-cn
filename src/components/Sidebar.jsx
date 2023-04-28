import React from "react";
import { ContactsList } from "../components";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="tab-content">
                <div className="tab-pane active">
                    <div className="d-flex flex-column h-100">
                        <div className="hide-scrollbar h-100">
                            <div className="sidebar-header sticky-top p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="font-weight-semibold mb-2 mt-2">CONVERSATION</h5>
                                </div>

                                <div className="sidebar-sub-header">
                                    <form className="form-inline" style={{ flexGrow: 1 }}>
                                        <div className="input-group" style={{ width: "100%" }}>
                                            <input
                                                type="text"
                                                className="form-control search border-right-0 transparent-bg pr-0"
                                                placeholder="Search users"
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text transparent-bg border-left-0" role="button">
                                                    <svg
                                                        className="text-muted hw-20"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <ContactsList />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
