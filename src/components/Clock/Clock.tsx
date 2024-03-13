import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    // const get2DigitsString = (num: number) => num < 10 ? '0' + num : num
    // const getHoursString = get2DigitsString(date.getHours())
    // const getMinutesString = get2DigitsString(date.getMinutes())
    // const getSecondsString = get2DigitsString(date.getSeconds())


    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>
}

