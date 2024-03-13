import React from "react";
import s from './AnalogClockView.module.css'

export type DigitalClockViewPropsType = {
    date: Date
}

export const AnalogClockView: React.FC<DigitalClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={s.clock}>
            <h3>Clock</h3>
            <div className={s['analog-clock']}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
            <div className={"digital-clock"}>
                {/*// {hours}:{minutes}:{seconds}*/}
            </div>
        </div>
    )
}