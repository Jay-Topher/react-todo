import React, { useContext, useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { TodoContext } from "../context/TodoContext";

function ListContainer() {
  const { todo, setTodo } = useContext(TodoContext);
  const [filtered, setFiltered] = useState([]);

  const markAsDone = (id) => {
    const updatedTodo = todo.map((t) => {
      if (t.id === id) {
        t.done = !t.done;
      }
      return t;
    });
    setTodo(updatedTodo);
  };

  const deleteTodo = (id) => {
    const todoToDelete = todo.findIndex((t) => t.id === id);
    const todoCopy = [...todo];
    todoCopy.splice(todoToDelete, 1);
    setTodo(todoCopy);
  };

  const clearCompleted = () => {
    const updatedTodos = todo.filter((t) => t.done === false);
    setFiltered([]);
    setTodo(updatedTodos);
  };

  const filterActive = () => {
    const updatedTodos = todo.filter((t) => t.done === false);
    setFiltered(updatedTodos);
  };

  const filterCompleted = () => {
    const completedTodos = todo.filter((t) => t.done);
    setFiltered(completedTodos);
  };

  return (
    <Ul>
      {(filtered.length ? filtered : todo).map((t) => (
        <ListItem
          text={t.text}
          done={t.done}
          key={t.id}
          finishTodo={() => markAsDone(t.id)}
          onDelete={() => deleteTodo(t.id)}
        />
      ))}

      <div className="list-footer">
        <span>{todo.length} items left</span>
        <span className="btns">
          <button>All</button>
          <button onClick={filterActive}>Active</button>
          <button onClick={filterCompleted}>Completed</button>
        </span>
        <span>
          <button onClick={clearCompleted}>Clear completed</button>
        </span>
      </div>
    </Ul>
  );
}

const Ul = styled.ul`
  background-color: ${({ theme }) => theme.listBg};
  border-radius: 5px;
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  .list-footer {
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;

    .btns {
      button:not(:last-child) {
        margin-right: 0.625rem;
      }
    }

    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      font-weight: 700;
      font-family: "Josefin Sans", sans-serif;
      cursor: pointer;
    }
  }
`;
export default ListContainer;
