import React from "react";

export type DigitalClockViewPropsType = {
    date: Date
}

export const get2DigitsString = (num: number) => num < 10 ? '0' + num : num
export const DigitalClockView: React.FC<DigitalClockViewPropsType> = (props) => {
    return <>
        <span>{get2DigitsString(props.date.getHours())}</span>:
        <span>{get2DigitsString(props.date.getMinutes())}</span>:
        <span>{get2DigitsString(props.date.getSeconds())}</span>
    </>
}