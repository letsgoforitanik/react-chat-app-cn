import React from "react";
import { useModalCloser } from "../hooks/useModalCloser";

export default function UsersList() {
    const closeModal = useModalCloser();
    const array = Array(10).fill();

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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
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
                            {array.map((e) => (
                                <li className="list-group-item">
                                    <div className="media">
                                        <div className="avatar avatar-online mr-2">
                                            <img
                                                src="https://pyxis.nymag.com/v1/imgs/70a/8bf/035e2a45436f3c1ee8bb609b2beabfd93c-9-brad-pitt.rsquare.w700.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="media-body">
                                            <h6 className="text-truncate">
                                                <a href="#" className="text-reset">
                                                    Catherine Richardson
                                                </a>
                                            </h6>

                                            <p className="text-muted mb-0">Online</p>
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
