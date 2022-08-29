import React, { Component } from "react";
import { RiCloseCircleLine } from "react-icons/ri"
import { AiFillCheckCircle } from "react-icons/ai"


export default function ToDoItem(props) {
    const { todo, removeTodo, completeTodo, ToDoItems } = props


    return (
        <div>
            {
                todo.completed === false && 
                <div className={todo.completed ? "props completed null" : "props"}>
                    {props.todo.text}
                    <div className="propsCorrect">
                        <RiCloseCircleLine style={{ marginRight: 12 }} onClick={() => removeTodo(todo.id)} />
                        <AiFillCheckCircle onClick={() => completeTodo(todo.id)} />
                    </div>
                </div>
            }
        </div>

    )
}



