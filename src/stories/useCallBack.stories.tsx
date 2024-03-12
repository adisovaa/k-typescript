import React, {useCallback, useMemo, useState} from "react"

export default {
    title: 'useCallBack'
}

export const LikeUseCallBack = () => {
    console.log('UsersWithMemo')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'TS', 'React'])

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Vue ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Vue ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}

type PropsBooksSecretType = { addBook: () => void }
const BooksSecret = (props: PropsBooksSecretType) => {
    console.log('Books Secret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)