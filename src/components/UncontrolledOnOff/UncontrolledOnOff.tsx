import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicatorStyle}></div>
        </>
    )
}

