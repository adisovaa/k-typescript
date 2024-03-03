import React, {ChangeEvent, useRef, useState} from "react";
import {action} from '@storybook/addon-actions'
import {Select} from './Select'

export default {
    title: "Select stories",
    component: Select
};

// const callback = action('accordion mode change event fired')

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Ann'},
                    {value: '2', title: 'Bob'},
                    {value: '3', title: 'Kate'}
                ]}/>
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Ann'},
                    {value: '2', title: 'Bob'},
                    {value: '3', title: 'Kate'}
                ]}/>
    )
}