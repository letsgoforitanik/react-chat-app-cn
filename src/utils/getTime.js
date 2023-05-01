import moment from "moment";

export function getTime(timestamp) {
    return moment(timestamp).format("hh:mm a");
}

export function getDay(timestamp) {
    const start = moment(timestamp);
    const end = moment();
    const diff = end.diff(start, "days");

    if (diff == 0) return "Today";
    else if (diff == 1) return "Yesterday";
    else if (diff >= 2 && diff <= 7) return start.format("dddd");
    else return start.format("LL");
}
