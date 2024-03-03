import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";

export default {
    component: Accordion,
    title: "Accordion stories",
};

const callback = action('CollapsedMode or UncollapsedMode clicked')
const onClickCallback = action('Item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'Collapsed'}
                                              collapsed={true}
                                              onChange={callback}
                                              onClick={onClickCallback}
                                              items={[{title: 'Ann', value: 1}, {title: 'Kate', value: 2}, {title: 'John', value: 3}]}/>
export const UncollapsedMode = () => <Accordion titleValue={'Uncollapsed'}
                                                collapsed={false}
                                                onChange={callback}
                                                onClick={onClickCallback}
                                                items={[{title: 'Ann', value: 1}, {title: 'Kate', value: 2}, {title: 'John', value: 3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Collapsed changing'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[{title: 'Ann', value: 1}, {title: 'Kate', value: 2}, {title: 'John', value: 3}]}
                      onClick={(id) => {console.log(`user with id ${id} should be happy`)}}
    />
}