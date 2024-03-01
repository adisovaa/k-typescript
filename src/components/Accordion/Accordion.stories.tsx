import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    component: Accordion,
    title: "Accordion stories",
};

const callback = action('CollapsedMode or UncollapsedMode clicked')

export const CollapsedMode = () => <Accordion titleValue={'Collapsed'} collapsed={true} onChange={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={'Uncollapsed'} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Collapsed changing'} collapsed={value} onChange={() => setValue(!value)}/>
}

