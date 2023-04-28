import React from "react";
import { useModal } from "../hooks/useModal";
import { UsersList } from "../components";

export default function Home() {
    const { openModal } = useModal(<UsersList />);
    const handleClick = () => openModal();

    return (
        <div className="chats">
            <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                <div className="container">
                    <div className="avatar avatar-lg mb-2">
                        <img
                            className="avatar-img"
                            src="https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w700.jpg"
                            alt="my-image"
                        />
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
