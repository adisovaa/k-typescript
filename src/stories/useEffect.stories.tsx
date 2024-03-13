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


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    const [tick, setTick] = useState(1)
    const [clock, setClock] = useState('')

    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    useEffect(() => {
        setInterval(() => {
            setTick(tick => tick + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setClock(new Date().toLocaleTimeString('en-US'))
        }, 1000)
    }, [])


    return <>
        <div>Hello {counter} {fake}</div>
        <br/>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <br/>
        <br/>
        <div>Tick -- {tick}</div>
        <div>
            <h1>Current Time: {clock}</h1>
        </div>
    </>
}