import React from "react";

export function Accordion(props: any) {
    console.log('Accordion')
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}

export function AccordionTitle(props: any) {
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

