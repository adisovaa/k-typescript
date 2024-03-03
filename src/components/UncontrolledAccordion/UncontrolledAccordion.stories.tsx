import React from "react";
import {action} from '@storybook/addon-actions'
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion,
    title: "UncontrolledAccordion stories",
};

const callback = action('accordion mode change event fired')

export const UncontrolledAccordionHandel = () => {
    return <UncontrolledAccordion titleValue={'UncontrolledAccordion'} />
}