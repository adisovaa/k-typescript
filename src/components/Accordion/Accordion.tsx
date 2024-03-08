import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionWithMemo(props: AccordionPropsType) {
    console.log('Accordion')
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

export const Accordion = React.memo(AccordionWithMemo)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitleWithMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return <>
        <h3 onClick={() => props.onChange()}>{props.title}</h3>
    </>
}

export const AccordionTitle = React.memo(AccordionTitleWithMemo)

type AccordionBody = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBodyWithMemo(props: AccordionBody) {
    console.log('AccordionBody')
    return <ul> {
        props.items.map((i, index) => {
            return <li key={index} onClick={() => {
                props.onClick(i.value)
            }}>{i.title}</li>
        })
    }
    </ul>
}

export const AccordionBody = React.memo(AccordionBodyWithMemo)