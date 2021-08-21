import {useState, useEffect} from "react";


const GG = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10) + 1)
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [comp, setComp] = useState(localStorage.getItem('comp') || 0)
    const [player, setPlayer] = useState(localStorage.getItem('player') || 0)
    // const checkBtn = () => {
    //     if (+guess > 0 && +guess <= 10) {
    //         if (number === +guess) {
    //             setMessage('Вы выйграли !!!')
    //             setPlayer(player + 1)
    //         } else if (number !== +guess && freeAttempt === 1) {
    //             setMessage('Вы поиграли ! ')
    //             setComp(comp + 1)
    //         } else {
    //             setFreeAttempt(freeAttempt - 1)
    //         }
    //     } else {
    //         setMessage('Введите число от 0 до 10')
    //     }
    //     setGuess('')
    // }


    // const checkBtn = () => {
    //     if (+guess > 0 && +guess <= 10) {
    //         if (number === +guess) {
    //             setMessage('Вы выйграли !!!')
    //             setPlayer(player + 1)
    //         } else if (number !== +guess && freeAttempt === 1) {
    //             setMessage('Вы проиграли ! ')
    //             setComp(comp + 1)
    //         } else {
    //             setFreeAttempt(freeAttempt - 1)
    //         }
    //     } else {
    //         setMessage('Введите число от 0 до 10')
    //     }
    //     setGuess('')
    // }

    const checkBtn = () => {
        setFreeAttempt(freeAttempt - 1)
    }

    useEffect(() => {

        if (+guess > 0 && +guess <= 10 ) {
            if (number !== +guess && freeAttempt === 0) {
                setMessage('Увы вы не угадали число !')
                setComp(comp + 1)
            } else if (number === +guess) {
                setMessage('Поздравляю вы угадали число!')
                setPlayer(player + 1)
            }
        } else {
            setMessage('Угадайте число от 1 до 10')
        }
    }, [freeAttempt])

    // const checkBtn = () => {
    //     setFreeAttempt(freeAttempt - 1)
    //     setFreeAttempt(0)
    //
    //     // if(number > +guess){
    //     //     setMessage("Недабор!")
    //     // }else if(number < +guess){
    //     //     setMessage('Перебор!')
    //     // }
    // }

    useEffect(() => {
        localStorage.setItem('comp', comp)
        localStorage.setItem('player', player)
    }, [message])


    const numberGuess = (e) => {
        setGuess(e.target.value)
    }

    const newGame = () => {
        setNumber(Math.round(Math.random() * 10) + 1)
        setGuess("")
        setMessage("")
        setFreeAttempt(3)
    }

    const Out = () => {
        localStorage.clear()
        setPlayer(0)
        setComp(0)
    }

    return (
        <div className='game'>
            <h3>Player: {player}</h3><h3>Comp: {comp}</h3>

            <h3>Угадай число с 3 попыток</h3>
            {
                Boolean(freeAttempt) &&
                <h5>У вас осталось {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки"}</h5>
            }
            <input type='number' onChange={numberGuess} value={guess} placeholder='Введите число'/>

            <div>
                <button onClick={checkBtn} disabled={!freeAttempt}>CHECK</button>
                <button onClick={newGame}>NEW GAME</button>
                <button onClick={Out} >Cash out an account</button>
                {/*<label htmlFor='mode'>OFF</label>*/}
                {/*<input type='radio' id='mode' name='mode'/>*/}
                {/*<label htmlFor='mode'>ON</label>*/}
                {/*<input type='radio' id='mode' name='mode' defaultChecked={true}/>*/}
            </div>
            <h4>{message}</h4>
            {/*<button onClick={reload}>Update invoice</button>*/}
        </div>
    )
}

export default GG