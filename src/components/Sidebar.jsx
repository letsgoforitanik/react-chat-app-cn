import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDay } from "../utils/getTime";

export default function Sidebar() {
    const [searchTerm, setSearchTerm] = useState("");
    const users = useSelector((state) => state.users);
    const searchedUsers = searchTerm ? users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())) : users;
    const { userId } = useParams();

    return (
        <aside className="sidebar">
            <div className="tab-content">
                <div className="tab-pane active">
                    <div className="d-flex flex-column h-100">
                        <div className="conv-container">
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
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
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

                            <ul className="hide-scrollbar contacts-list" style={{ flexGrow: 1, marginBottom: 0 }}>
                                {searchedUsers.map((user) => (
                                    <li
                                        key={user.id}
                                        className={"contacts-item friends" + (user.id == userId ? " active" : "")}
                                        style={{ height: "auto" }}
                                    >
                                        <Link className="contacts-link" to={`/users/${user.id}/conversations`}>
                                            <div className={`avatar avatar-${user.status}`}>
                                                <img src={user.image} alt="user-icon" />
                                            </div>
                                            <div className="contacts-content">
                                                <div className="contacts-info">
                                                    <h6 className="chat-name text-truncate">{user.name}</h6>
                                                    <div className="chat-time">{getDay(user.timestamp)}</div>
                                                </div>
                                                <div className="contacts-texts">
                                                    <p className="text-truncate">{user.chats[user.chats.length - 1].text}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
