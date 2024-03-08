import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserWithMemo = (props: { users: Array<string> }) => {
    console.log(props.users)
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UserWithMemo)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState(['John, Ann, Lorem'])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}



