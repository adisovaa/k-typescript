import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion')
    return <div>
        <AccordionTitle title={props.titleValue}/>
        { !props.collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return <>
        <h3>{props.title}</h3>
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

