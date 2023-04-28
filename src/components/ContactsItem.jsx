import React from "react";

export default function ContactsItem() {
    return (
        <li className="contacts-item friends" style={{ height: "auto" }}>
            <a className="contacts-link" href="#">
                <div className="avatar avatar-online">
                    <img
                        src="https://pyxis.nymag.com/v1/imgs/70a/8bf/035e2a45436f3c1ee8bb609b2beabfd93c-9-brad-pitt.rsquare.w700.jpg"
                        alt=""
                    />
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name text-truncate">Catherine Richardson</h6>
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
