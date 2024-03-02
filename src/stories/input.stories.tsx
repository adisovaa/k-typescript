import React, {ChangeEvent, useRef, useState} from "react";
import {action} from '@storybook/addon-actions'

export default {
    title: "Input stories",
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInputWith = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

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
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <>
        <input value={parentValue} onChange={onChange}/>
        <div>{parentValue}</div>
    </>
}
export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return <>
        <input type={"checkbox"} checked={checked} onChange={onChange}/>
    </>
}
export const ControlledSelect = () => {
    const [selected, setSelected] = useState<string | undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelected(e.currentTarget.value)

    return <>
        <select value={selected} onChange={onChange}>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
        </select>
        --- {selected} ---
    </>
}