import {useEffect, useState} from "react";

const GameV03 = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [player, setPlayer] = useState(localStorage.getItem("Player") || 0)
    const [computer, setComputer] = useState( localStorage.getItem("Computer") || 0)

    const randomGuess = (e) => {
        setGuess(e.target.value)
        if (+guess > 0 && +guess <= 10){
            setMessage('Введите число от 0 до 10')
        }
    }

    const checkBtn = () => {
        setFreeAttempt(freeAttempt - 1)
        if(random > +guess){
            setMessage('недобор')
        }else if(random < +guess){
            setMessage('перебор')
        }
    }

    useEffect(() => {
        if (random === +guess) {
            setMessage('Поздравляю вы угадали число!')
            setPlayer(+player + 1)
        } else if (random !== +guess && freeAttempt === 0) {
            setMessage('Увы вы не угадали число !')
            setComputer( +computer + 1)
        }
    }, [freeAttempt])

    const newGame = () =>{
        setRandom(Math.round(Math.random() * 10) )
        setGuess("")
        setMessage("")
        setFreeAttempt(3)
    }

    useEffect(() =>{
        localStorage.setItem('Computer', computer)
        localStorage.setItem('Player', player)
    }, [message])

    const clearAll = () => {
        localStorage.clear()
        setPlayer(0)
        setComputer(0)
    }

    return (
        <div className='game'>
            <h2>Угадай число с 3 попыток</h2>
            <div className='account'>
                <h5 className='player'>Игрок: {player}</h5>

                <label htmlFor='mode'>OFF</label>
                <input type='radio' id='mode' name='mode'/>
                <label htmlFor='mode'>ON</label>
                <input type='radio' id='mode' name='mode' defaultChecked={true}/>

                <h5>Компьютер: {computer}</h5>
            </div>
            <input onChange={randomGuess} value={guess} type='number' placeholder='Введите число'/>
            <div>
                <button onClick={checkBtn} >CHECK</button>
                <button onClick={newGame} className="new-game">NEW GAME</button>
                <button onClick={clearAll}>CLEAR ALL</button>
                <div>{message}</div>
            </div>
        </div>
    )

}

export default GameV03