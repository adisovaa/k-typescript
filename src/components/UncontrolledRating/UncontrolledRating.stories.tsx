import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    component: UncontrolledRating,
    title: "UncontrolledRating stories",
};

const callback = action('UncontrolledRating changed inside of component')

export const EmptyStarts = () => <UncontrolledRating DefaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating DefaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating DefaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating DefaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating DefaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating DefaultValue={5} onChange={callback}/>