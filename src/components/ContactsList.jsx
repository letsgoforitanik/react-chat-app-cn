import React from "react";
import ContactsItem from "./ContactsItem";

export default function ContactsList() {
    const array = Array(15).fill();

    return (
        <ul className="contacts-list" style={{ height: "calc(100vh - 117px)" }}>
            <ContactsItem />
        </ul>
    );
}
