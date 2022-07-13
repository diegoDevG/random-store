import { useState } from 'react';

interface User {
    uid: string
    name: string
}

export const User = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Diego Cardenas'
        })
    }

    return (
        <div className="box">
            <h3>Usuario: {user ? user.name : 'anonymus'}</h3>
            <button onClick={() => login()}> Login </button>
        </div>
    )
}