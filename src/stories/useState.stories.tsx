import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 134234
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData)

    const initValue = generateData()

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

