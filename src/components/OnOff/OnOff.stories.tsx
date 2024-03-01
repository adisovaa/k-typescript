import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";

export default {
    component: OnOff,
    title: "OnOff stories",
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}