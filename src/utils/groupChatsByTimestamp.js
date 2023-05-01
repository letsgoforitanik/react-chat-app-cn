import { getDay } from "./getTime";

// Groups messages by their creation date
export function groupChatsByTimestamp(chats) {
    const groups = {};

    for (let chat of chats) {
        const groupName = getDay(chat.timestamp);
        groups[groupName] || (groups[groupName] = []);
        groups[groupName].push(chat);
    }

    return groups;
}
