import React from "react";
import styled from "styled-components";
import closeIcon from "../images/icon-cross.svg";
import checkIcon from "../images/icon-check.svg";

function ListItem({ text, done, onDelete, finishTodo }) {
  return (
    <List className={`list-item ${done ? "done" : ""}`}>
      <span className="radio" />
      <p onClick={finishTodo}>{text}</p>
      <button className="close-btn" onClick={onDelete} />
    </List>
  );
}

const List = styled.li`
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.listBg};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.disabled};

  &.done {
    p {
      text-decoration: line-through;
      color: ${({ theme }) => theme.disabled};
    }

    .radio {
      background-image: url(${checkIcon}),
        linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &:hover {
    .close-btn {
      display: block;
    }
  }

  .close-btn {
    margin-left: auto;
    border: none;
    background-color: transparent;
    background-image: url(${closeIcon});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    transition: all 0.3s ease-in;
    display: none;
  }

  p {
    margin: 0;
    flex: 1;
  }
`;

export default ListItem;
