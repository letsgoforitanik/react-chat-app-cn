import React from "react";
import ContactsItem from "./ContactsItem";
import { useSelector } from "react-redux";

export default function ContactsList() {
    const users = useSelector((state) => state.users);

    return (
        <ul className="contacts-list" style={{ height: "calc(100vh - 117px)" }}>
            {users.map((user) => (
                <ContactsItem key={user.id} user={user} />
            ))}
        </ul>
    );
}
