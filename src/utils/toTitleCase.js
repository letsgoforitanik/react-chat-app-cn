// Converts input string to title case
export function toTitleCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}
