import React, { useEffect, useState } from 'react'
import { useCountDown } from './hooks/useCountdown'

function UseCountDown() {
    const secondsLeft = useCountDown(70);
    return (
        <div>
            <h1>Seconds left: {secondsLeft}</h1>
        </div>
    )
}

export default UseCountDown