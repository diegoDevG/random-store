import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increment = (number: number = 1): void => {
        setCounter(counter + number)
    }
    return (
        <div>
            <h3>Counter: {counter} </h3>
            <button onClick={() => increment()} color="primary is-light"> +1</button>

            <h3>Sumar dos</h3>
            <button onClick={() => increment(2)} color="primary is-light"> +2</button>
            <br />
            <button onClick={() => setCounter(0)} color="danger is-light"> Reset</button>

        </div>
    )
}