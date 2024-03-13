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


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('Reset effect' + counter)
        }

    }, [])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </div>
    )
}


export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('KeyTrackerExample')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.code)
            setText((text) => text + e.code)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}


export const SetTimeOutExample2 = () => {
    const [text, setText] = useState('')

    console.log('component rendered with ' + {text})

    useEffect(() => {
        const textID = setTimeout(() => {
            console.log('timeout expired')
            setText('3 sec passed')
        }, 3000)

        return () => {
            clearTimeout(textID)
        }
    }, [text])


    return (
        <div>
            Text: {text}
        </div>
    )
}