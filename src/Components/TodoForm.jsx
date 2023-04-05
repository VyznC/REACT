import React,{useState} from 'react'


function TodoForm({ Added  }) {
    const [enteredTodo, setEnteredTodo] = useState('')
    const [empty, setEmpty] = useState(false);

    
    let todoInputHandler = (event) => {
        setEnteredTodo(event.target.value)
        console.log(event.target.value)
        setEmpty(false) 
    }

    let storage = {
        id: Math.round(Math.random(0) * 100),
        text: enteredTodo,
    }


    let sumbithandler = (e) => {
        e.preventDefault();

        if (enteredTodo === '') {
            
            return
        } 

            Added(storage)
            console.log(enteredTodo)
            setEnteredTodo('')
    }

    let Clicked = () => {
        if (enteredTodo == '') {
            setEmpty(true)
        
        }
    }

    

    

        return (
            <form className='todo-Form' onSubmit={sumbithandler} >
                <input type="text" placeholder='Add A Todo' value={enteredTodo} onChange={todoInputHandler}  style={{
                    'background': empty ? "red" : 'white' 
                } } />
                <button className='todo-button' onClick={Clicked}>Add todo</button>
            </form>
        )
}

export default TodoForm