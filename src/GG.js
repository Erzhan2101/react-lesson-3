import {useEffect, useState} from "react";


const GG = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState('')
    const [freeAttempt, setAttempt] = useState(3)
    const [message, setMessage] = useState('')

    const inputNumber = (e) => {
        setGuess(e.target.value)
    }

    const check = () => {
        setAttempt(freeAttempt - 1)
        setGuess('')
    }

    useEffect(() => {
        if (random === +guess) {
            setMessage('you win')
        } else if (random !== +guess && freeAttempt === 0) {
            setMessage('you lost')
        }
    }, [freeAttempt])


    return (
        <div>
            <h1>угадай число от 0 до 10</h1>
            <input onChange={inputNumber} type='number'/>
            <button onClick={check} disabled={!freeAttempt}>check</button>
            <button>new game</button>
            <button>clear all</button>
            {
                Boolean(freeAttempt) &&
                    <p>у вас осталось {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки"}</p>
            }
            <p>{message}</p>
        </div>
    )
}

export default GG