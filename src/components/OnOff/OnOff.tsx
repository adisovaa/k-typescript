import React, {useState} from 'react';


export const OnOff = (props: any) => {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'red' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: !on ? 'green' : 'white'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '20px',
        backgroundColor: on ? 'red' : 'green'
    }

    const onClickHandlerOn = () => setOn(true)
    const onClickHandler = () => setOn(false)

    return (
        <>
            <div style={onStyle} onClick={onClickHandlerOn}>on</div>
            <div style={offStyle} onClick={onClickHandler}>off</div>
            <div style={indicatorStyle}></div>
        </>
    )
}

