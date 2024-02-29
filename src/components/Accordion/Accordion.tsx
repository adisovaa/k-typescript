import React from "react";

type valueType = {
    setAccordionCollapsed: boolean
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion')
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return <>
        <h3 onClick={props.onChange}>{props.title}</h3>
    </>
}

export function AccordionBody() {
    console.log('AccordionBody')
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

