import { useEffect, useState } from "react";

export const useCountDown = (initialTime) => {
    const [seconds, setSeconds] = useState(initialTime || 60);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSeconds((prevSeconds) => prevSeconds > 0 ? prevSeconds - 1 : prevSeconds)
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [seconds]);

    return seconds;
}