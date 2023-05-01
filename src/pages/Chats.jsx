import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage, getUsers } from "../store/slice";
import { toTitleCase } from "../utils/toTitleCase";
import { groupChatsByTimestamp } from "../utils/groupChatsByTimestamp";
import myImage from "../assets/images/anik.jpg";
import { getTime } from "../utils/getTime";
import { useToggle } from "../hooks/useToggle";

export default function Chats() {
    const dispatch = useDispatch();
    const [showBar, toggleShowBar] = useToggle(false);
    const [searchText, setSearchText] = useState("");
    const { userId } = useParams();
    const txtMessage = useRef();
    const chatContainer = useRef();
    const user = useSelector((state) => state.users.find((u) => u.id == userId));
    useEffect(() => dispatch(getUsers()) && undefined, []);
    useEffect(() => scrollToBottom() && undefined, [user]);

    function scrollToBottom() {
        const ref = chatContainer.current;
        ref && (ref.scrollTop = ref.scrollHeight);
    }

    function handleClick() {
        const messageText = txtMessage.current.innerText;

        if (!messageText) return;

        const message = {
            id: crypto.randomUUID(),
            self: true,
            text: messageText,
            timestamp: new Date().toISOString(),
        };

        dispatch(addMessage({ userId, message }));

        txtMessage.current.innerText = "";
    }

    function toggleSearchBar() {
        if (showBar) setSearchText("");
        toggleShowBar();
    }

    if (!user) return null;

    const userChats = searchText ? user.chats.filter((c) => c.text.toLowerCase().includes(searchText.toLowerCase())) : user.chats;

    const { image, name, status, chats } = user;

    const chatGroups = groupChatsByTimestamp(userChats);

    return (
        <div className="chats">
            <div className="chat-body">
                <div className="chat-header">
                    <div className="media chat-name align-items-center text-truncate">
                        <div className={`avatar avatar-${status} d-none d-sm-inline-block mr-3`}>
                            <img src={image} alt="user-icon" />
                        </div>

                        <div className="media-body align-self-center ">
                            <h6 className="text-truncate mb-0">{name}</h6>
                            <small className="text-muted">{toTitleCase(status)}</small>
                        </div>
                    </div>

                    <ul className="nav flex-nowrap">
                        <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                            <a className="nav-link text-muted px-1" onClick={toggleSearchBar} style={{ cursor: "pointer" }}>
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

                <div className={`${showBar ? "show-bar" : ""} bar border-bottom px-3`}>
                    <div className="container-xl py-2 px-0 px-md-3">
                        <div className="input-group bg-light ">
                            <input
                                type="text"
                                className="form-control form-control-md border-right-0 transparent-bg pr-0"
                                placeholder="Search Conversation"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
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

                <div className="chat-content p-2" ref={chatContainer}>
                    <div className="container">
                        {Object.entries(chatGroups).map(([grpName, chats], index) => (
                            <div className="message-day" key={index}>
                                <div className="message-divider sticky-top pb-2" data-label={grpName}>
                                    &nbsp;
                                </div>
                                {userChats.map((chat) => (
                                    <div className={"message" + (chat.self ? " self" : "")} key={chat.id}>
                                        <div className="message-wrapper">
                                            <div className="message-content">
                                                <span>{chat.text}</span>
                                            </div>
                                        </div>
                                        <div className="message-options">
                                            <div className="avatar avatar-sm">
                                                <img alt="user-icon" src={chat.self ? myImage : image} />
                                            </div>
                                            <span className="message-date">{getTime(chat.timestamp)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="chat-finished"></div>
                </div>

                <div className="chat-footer">
                    <div className="emojionearea form-control emojionearea-form-control" role="application">
                        <div
                            className="emojionearea-editor"
                            contentEditable="true"
                            placeholder="Type your message here..."
                            tabIndex="0"
                            dir="ltr"
                            spellCheck="false"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            ref={txtMessage}
                        ></div>
                    </div>

                    <div
                        className="btn btn-primary btn-icon send-icon rounded-circle text-light mb-1"
                        role="button"
                        onClick={handleClick}
                    >
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
