import React from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '20px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>on</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </>
    )
}

