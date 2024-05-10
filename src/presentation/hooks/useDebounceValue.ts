import { useEffect, useState } from "react"

export const useDebounceValue = (value: string, time = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, time)

        return () => {
            clearTimeout(timeout)
        }
    }, [value])

    return debouncedValue
}