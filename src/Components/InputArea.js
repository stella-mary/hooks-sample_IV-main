import React, { useState } from "react";


export default function TodoForm(props) {
    const [input, setInput] = useState("")
    
const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input onChange={(e) => setInput(e.target.value)} placeholder="Enter a new note" value={input}/>
            <button>Add Note</button>
        </form>
    ); 
    
};


