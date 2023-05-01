import { useState } from "react";

export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);

    function toggleValue() {
        setValue((currentValue) => !currentValue);
    }

    return [value, toggleValue];
}
