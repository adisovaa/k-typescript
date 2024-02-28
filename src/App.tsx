import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('app')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            {/*Article 2*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            <OnOff/>
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


