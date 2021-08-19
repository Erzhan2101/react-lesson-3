import {useState} from "react";

const Todos = () => {

    const [todos, setTodos] = useState(["Моя новая задача"])

    const [text, setText] = useState("")

    const addTodo = () => {
        if (text.trim() !== "") {
            setTodos([...todos, text])
        }
        setText('')
    }
    const delTodo = () => {
        setTodos([...todos.slice(0, -1)])
    }

    const todosText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={todosText}/>
            <div>
                <button onClick={addTodo}>Добавить дело</button>
                <button onClick={delTodo}>Удалит дело</button>
            </div>
            <ul>
                {todos.map((el, idx) => (
                    <li key={idx}>{el}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Todos

