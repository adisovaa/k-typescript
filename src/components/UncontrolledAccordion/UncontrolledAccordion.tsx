import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion')
    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    const onClickHandle = () => dispatch({type: TOGGLE_COLLAPSED})

    return <div>
        <AccordionTitle title={props.titleValue} onClickHandle={onClickHandle}/>
        {!state && <AccordionBody/>}
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

