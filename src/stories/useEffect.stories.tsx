import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Simple Example')

    // useEffect(() => {
    //     api.getUsers().then('')
    //     setInterval
    //     indexedDB
    //     documents.getElementID
    //     document.title = 'Users'
    // })

    useEffect(() => {
        console.log('UseEffect every render ')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('UseEffect only in first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('UseEffect first render and every render change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}

