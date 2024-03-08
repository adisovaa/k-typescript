import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let temResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                resultA = resultB + i
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return temResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Resul for a: {resultA}</div>
        <div>Resul for b: {resultB}</div>
    </>
}