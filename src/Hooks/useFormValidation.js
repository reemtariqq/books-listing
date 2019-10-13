import React, { useState, useEffect } from 'react'

export function useField(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const [dirty, setDirty] = useState(false);
    const [touched, setTouched] = useState(false);

    function handleChange(e) {
        setValue(e.target.value);
        setTouched(true);
    }

    return {
        value, setValue,
        dirty, setDirty,
        touched, setTouched,
        handleChange
    }
}
