import React from "react";

export default function Chats() {
    return (
        <div className="chats">
            <div className="chat-body">
                <div className="chat-header">
                    <div className="media chat-name align-items-center text-truncate">
                        <div className="avatar avatar-online d-none d-sm-inline-block mr-3">
                            <img
                                src="https://pyxis.nymag.com/v1/imgs/39a/254/85545f75d381a56273ee81ae7247e39b34-scarlett-johansson.rsquare.w330.jpg"
                                alt=""
                            />
                        </div>

                        <div className="media-body align-self-center ">
                            <h6 className="text-truncate mb-0">Catherine Richardson</h6>
                            <small className="text-muted">Online</small>
                        </div>
                    </div>

                    <ul className="nav flex-nowrap">
                        <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                            <a
                                className="nav-link text-muted px-1"
                                data-toggle="collapse"
                                data-target="#searchCollapse"
                                href="#"
                                aria-expanded="false"
                            >
                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="collapse border-bottom px-3" id="searchCollapse">
                    <div className="container-xl py-2 px-0 px-md-3">
                        <div className="input-group bg-light ">
                            <input
                                type="text"
                                className="form-control form-control-md border-right-0 transparent-bg pr-0"
                                placeholder="Search"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text transparent-bg border-left-0">
                                    <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-content p-2" id="messageBody">
                    <div className="container">
                        <div className="message-day">
                            <div className="message-divider sticky-top pb-2" data-label="Yesterday">
                                &nbsp;
                            </div>

                            <div className="message">
                                <div className="message-wrapper">
                                    <div className="message-content">
                                        <span>
                                            I have to give a presentation on global warming on Friday, and I am so nervous.
                                        </span>
                                    </div>
                                </div>
                                <div className="message-options">
                                    <div className="avatar avatar-sm">
                                        <img
                                            alt=""
                                            src="https://pyxis.nymag.com/v1/imgs/39a/254/85545f75d381a56273ee81ae7247e39b34-scarlett-johansson.rsquare.w330.jpg"
                                        />
                                    </div>
                                    <span className="message-date">9:12am</span>
                                </div>
                            </div>

                            <div className="message self">
                                <div className="message-wrapper">
                                    <div className="message-content">
                                        <span>
                                            First of all, you need to understand the subject matter thoroughly. You need to know
                                            what is global warming, what causes global warming, and what people should do to abate
                                            the effects of global warming.
                                        </span>
                                    </div>
                                </div>
                                <div className="message-options">
                                    <div className="avatar avatar-sm">
                                        <img
                                            alt=""
                                            src="https://pyxis.nymag.com/v1/imgs/9aa/475/1823b5cb4da583636d4237bd729cf855e0-23-chris-evans.rsquare.w700.jpg"
                                        />
                                    </div>

                                    <span className="message-date">9:12am</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat-finished" id="chat-finished"></div>
                </div>

                <div className="chat-footer">
                    <div className="emojionearea form-control emojionearea-form-control" role="application">
                        <div
                            className="emojionearea-editor"
                            contenteditable="true"
                            placeholder="Type your message here..."
                            tabindex="0"
                            dir="ltr"
                            spellcheck="false"
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                        ></div>
                    </div>

                    <div className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1" role="button">
                        <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
