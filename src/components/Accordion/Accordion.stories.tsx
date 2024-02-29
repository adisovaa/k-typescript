import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
}

const onChangeHandler = action('on change')
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Closed'}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened'}
                      collapsed={false}
                      onChange={() => {}}/>
}

export const Accordions = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={'Opened'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}/>
}