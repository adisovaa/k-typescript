import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('app')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const Items = [{
        title: 'hey',
        value: 0
    }]

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <UncontrolledAccordion titleValue={'Uncontrolled Accordion'}/>
            <Accordion titleValue={'Accordion'}
                       collapsed={accordionCollapsed}
                       items={[]}
                       onClick={() => {}}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            {/*Article 2*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}

            {/*<OnOff on={switchOn} onChange={(switchOn) => {setSwitchOn(switchOn)}}/>*/}
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log('AppTitle')
    return <h1>{props.title}</h1>
}

export default App;