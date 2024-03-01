import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    component: UncontrolledOnOff,
    title: "UncontrolledOnOff stories",
};

const callback = action('uncontrolled on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>