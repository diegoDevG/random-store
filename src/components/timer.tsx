import { useEffect, useState } from 'react';

type TimerArgs = {
    seconds?: number
}

export const Timer = ({ seconds = 60 }: TimerArgs) => {

    const [segundos, setSegundos] = useState(seconds)

    useEffect(() => {
        segundos > 0 && setTimeout(() => setSegundos(segundos - 1), 1000)

    }, [segundos])
    return (
        <div>
            Countdown: {segundos}
        </div>
    )
}