import React, {ChangeEvent, useRef, useState} from "react";
import {action} from '@storybook/addon-actions'

export default {
    title: "Input stories",
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInputWith = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        return setValue(e.currentTarget.value)
    }

    return <>
        <input onChange={onChange}/> - {value} -
    </>
}

export const GetValueOfUncontrolledInputWith = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input id={'inputId'} ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value} -
    </>
}


export const ControlledInputWithFixedValue = () => <input value={'Middle developer'}/>

