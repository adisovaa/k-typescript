import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    console.log('UncontrolledAccordion')

    const onClickHandle = () => setCollapsed(!collapsed)

    return <div>
        <AccordionTitle title={props.titleValue} onClickHandle={onClickHandle}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClickHandle: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle')
    return <>
        <h3 onClick={props.onClickHandle}>{props.title}</h3>
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

