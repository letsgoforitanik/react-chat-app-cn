import { useState } from "react";

// This hook is used to toggle a boolean value
// Small but very useful hook
// Useful to toggle component state like show/hide
export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);

    function toggleValue() {
        setValue((currentValue) => !currentValue);
    }

    return [value, toggleValue];
}
