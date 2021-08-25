import {useEffect, useState} from "react";

const GameV03 = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [player, setPlayer] = useState(localStorage.getItem("Player") || 0)
    const [computer, setComputer] = useState(localStorage.getItem("Computer") || 0)
    const [percent, setPercent] = useState(0)
    const [isTrue, setIsTrue] = useState(true)

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
        } else if (random === +guess) {
            setMessage("вы угадали нажмите CHECK чтобы выиграть")
        }
    }


    const checkBtn = () => {
        setFreeAttempt(freeAttempt - 1)
    }

    useEffect(() => {
        localStorage.setItem('Computer', computer)
        localStorage.setItem('Player', player)
    }, [message])

    useEffect(() => {
        if (guess !== '') {
            setIsTrue(false)
        }
    }, [guess])


    useEffect(() => {
        if (random === +guess) {
            setMessage('Поздравляю вы угадали число!')
            setPlayer(+player + 1)
            setFreeAttempt(0)
            setPercent(percent + 1)

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
        setIsTrue(true)
    }

    const clearAll = () => {
        localStorage.clear()
        setPlayer(0)
        setComputer(0)
        newGame()
    }

    return (
        <div className='game '>
            <h2 className='title'>Угадай число с 3 попыток</h2>
            <div className='account'>
                <h5 className='player'>Игрок: {player}</h5>
                <h5 className='comp'>Компьютер: {computer}</h5>
                {/*<h5 className='percent'>Процент побед: {Math.round(player/percent)*100} %</h5>*/}
                <h5 className='percent'>Процент побед: {percent} %</h5>
            </div>
            <input className='guess' onChange={randomGuess} value={guess} type='number' placeholder='Введите число'/>
            <button className='prompt' disabled={!freeAttempt} onClick={prompt}>Подсказка</button>
            <div>
                <button className='checkBtn' onClick={checkBtn} disabled={isTrue}>CHECK</button>
                <button className="new-game" onClick={newGame}>NEW GAME</button>
                <button className='clear-all' onClick={clearAll}>Start all over again</button>
                {
                    Boolean(freeAttempt) &&
                    <p className='live'>У вас есть {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки"} чтобы
                        угадать цифру</p>
                }
                <div className='message'>{message}</div>
            </div>
        </div>
    )
}

export default GameV03