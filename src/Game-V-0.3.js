import {useEffect, useState} from "react";

const GameV03 = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [player, setPlayer] = useState(localStorage.getItem("Player") || 0)
    const [computer, setComputer] = useState(localStorage.getItem("Computer") || 0)

    const randomGuess = (e) => {
        setGuess(e.target.value)
        if (+guess > 0 && +guess <= 10) {
            setMessage('Введите число от 0 до 10')
        }
    }

    const prompt = () => {
        if (random > +guess) {
            setMessage('недобор')
        } else if (random < +guess) {
            setMessage('перебор')
        }
    }


    const checkBtn = () => {
        setFreeAttempt(freeAttempt - 1)
    }

    useEffect(() => {
        if (random === +guess) {
            setMessage('Поздравляю вы угадали число!')
            setPlayer(+player + 1)
            setFreeAttempt(0)

        } else if (random !== +guess && freeAttempt === 0) {
            setMessage('Увы вы не угадали число !')
            setComputer(+computer + 1)
        }
    }, [freeAttempt])

    const newGame = () => {
        setRandom(Math.round(Math.random() * 10))
        setGuess("")
        setMessage("")
        setFreeAttempt(3)
    }

    useEffect(() => {
        localStorage.setItem('Computer', computer)
        localStorage.setItem('Player', player)
    }, [message])

    const clearAll = () => {
        localStorage.clear()
        setPlayer(0)
        setComputer(0)
    }

    return (
        <div className='game ' >
            <h2 className='title'>Угадай число с 3 попыток</h2>
            <div className='account'>
                <h5 className='player'>Игрок: {player}</h5>
                <h5 className='comp'>Компьютер: {computer}</h5>
            </div>
            <input className='guess' onChange={randomGuess} value={guess} type='number' placeholder='Введите число'/>
            <button className='prompt' onClick={prompt} >Подсказка</button>
            <div>
                <button className='checkBtn' onClick={checkBtn} disabled={!freeAttempt}>CHECK</button>
                <button className="new-game" onClick={newGame} >NEW GAME</button>
                <button className='clear-all' onClick={clearAll}>CLEAR ALL</button>
                {
                    Boolean(freeAttempt) &&
                    <p className='live'>У вас осталось {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки" }</p>
                }
                <div className='message'>{message}</div>
            </div>
        </div>
    )

}

export default GameV03