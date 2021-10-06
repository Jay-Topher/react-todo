import React, { useContext } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { TodoContext } from "../context/TodoContext";

function ListContainer() {
  const { todo } = useContext(TodoContext);
  console.log(todo);
  return (
    <Ul>
      {todo.map((t) => (
        <ListItem text={t.text} done={t.done} key={t.id} />
      ))}

      <div className="list-footer">
        <span>items left</span>
        <span className="btns">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </span>
        <span>
          <button>Clear completed</button>
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
