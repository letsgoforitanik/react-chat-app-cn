import React from "react";
import { useModalCloser } from "../hooks/useModalCloser";
import { useSelector } from "react-redux";
import { toTitleCase } from "../utils/toTitleCase";

export default function UsersList() {
    const users = useSelector((state) => state.users);
    const closeModal = useModalCloser();

    return (
        <div className="modal-content md-content">
            <div className="modal-header">
                <h5 className="modal-title" id="startConversationLabel">
                    Start Conversation
                </h5>
                <button type="button" className="close" onClick={() => closeModal()}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div className="modal-body p-0 hide-scrollbar">
                <div className="row">
                    <div className="col-12">
                        <form className="form-inline w-100 p-2 border-bottom">
                            <div className="input-group w-100 bg-light">
                                <input
                                    type="text"
                                    className="form-control form-control-md search border-right-0 transparent-bg pr-0"
                                    placeholder="Search"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text transparent-bg border-left-0" role="button">
                                        <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                    <div className="col-12">
                        <ul className="list-group list-group-flush hide-scrollbar" style={{ height: 370 }}>
                            {users.map((user) => (
                                <li className="list-group-item" key={user.id}>
                                    <div className="media">
                                        <div className={`avatar avatar-${user.status} mr-2`}>
                                            <img src={user.image} alt="user-icon" />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate">
                                                <a href="#" className="text-reset">
                                                    {user.name}
                                                </a>
                                            </h6>

                                            <p className="text-muted mb-0">{toTitleCase(user.status)}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
