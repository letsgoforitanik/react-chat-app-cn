import moment from "moment";

// Converts timestamp into time in hh:mm format
export function getTime(timestamp) {
    return moment(timestamp).format("hh:mm a");
}

// Returns the day or date
export function getDay(timestamp) {
    const start = moment(timestamp);
    const end = moment();
    const diff = end.diff(start, "days");

    if (diff == 0) return "Today";
    else if (diff == 1) return "Yesterday";
    else if (diff >= 2 && diff <= 7) return start.format("dddd");
    else return start.format("LL");
}
