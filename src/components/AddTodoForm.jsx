import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";

function AddTodoForm() {
  const [todoItem, setTodoItem] = useState("");
  const { setTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      text: todoItem,
      done: false,
      id: Date.now(),
    };
    setTodo((prevTodo) => prevTodo.concat(todoObj));
    setTodoItem("");
  };

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="input-container">
        <span className="radio"></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          name="todoInput"
          value={todoItem}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
}

const Form = styled.form`
  .input-container {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.listBg};
    padding: 1rem 2rem;
    border-radius: 5px;
    box-shadow: hsla(235, 21%, 11%, 0.25) 0px 25px 50px -12px;
    font-family: "Josefin Sans", sans-serif;

    input {
      background: transparent;
      flex: 1;
      border: none;
      font-size: 1.125rem;
      color: ${({ theme }) => theme.text};
      font-family: "Josefin Sans", sans-serif;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default AddTodoForm;
