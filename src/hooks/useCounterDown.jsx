import { useState, useEffect } from "react"

export const CountDown = (initial, callback, interval = 1000) => {

    const [time, setTime] = useState(initial)
    useEffect(() => {
        const customInterval = setInterval(() => {
            if (time > 0 ) setTime((prev) => prev - interval)
        },interval)


        if(time == 0){ callback();
           //  setTime(initial)
            }

        return () => clearInterval(customInterval)

        
    }, [time])

    return time
}