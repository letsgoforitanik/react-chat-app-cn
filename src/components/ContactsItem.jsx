import React from "react";

export default function ContactsItem({ user }) {
    return (
        <li className="contacts-item friends" style={{ height: "auto" }}>
            <a className="contacts-link" href="#">
                <div className={`avatar avatar-${user.status}`}>
                    <img src={user.image} alt="user-icon" />
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name text-truncate">{user.name}</h6>
                        <div className="chat-time">Just now</div>
                    </div>
                    <div className="contacts-texts">
                        <p className="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
                    </div>
                </div>
            </a>
        </li>
    );
}
