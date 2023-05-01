import React from "react";
import { useModal } from "../hooks/useModal";
import { UsersList } from "../components";
import myImage from "../assets/images/anik.jpg";

// The initial home page. It does nothing special.
// To create new conversation, we can click
//  "Start a conversation" button
export default function Home() {
    const { openModal } = useModal(<UsersList />);
    const handleClick = () => openModal();

    return (
        <div className="chats">
            <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                <div className="container">
                    <div className="avatar avatar-lg mb-2">
                        <img className="avatar-img" src={myImage} alt="my-image" />
                    </div>

                    <h5>Welcome, Aniruddha!</h5>
                    <p className="text-muted">Please select a chat to start messaging</p>

                    <button className="btn btn-outline-primary no-box-shadow" type="button" onClick={handleClick}>
                        Start a conversation
                    </button>
                </div>
            </div>
        </div>
    );
}
