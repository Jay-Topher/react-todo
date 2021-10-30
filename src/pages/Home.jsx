import React from "react";
import styled from "styled-components";
import AddTodoForm from "../components/AddTodoForm";
import ListContainer from "../components/ListContainer";
import ToggleBtn from "../components/ToggleBtn";
import bgDark from "../images/bg-desktop-dark.jpg";
import bgLight from "../images/bg-desktop-light.jpg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

function Home() {
  return (
    <Main>
      <div className="container">
        <section className="home-page">
          <div className="home-page-header">
            <h1>TODO</h1>
            <ToggleBtn className="toggeBtn"></ToggleBtn>
          </div>
          <AddTodoForm />
          <section>
            <ListContainer />
          </section>
        </section>
      </div>
    </Main>
  );
}

const Main = styled.main`
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  height: 100vh;
  ${({ theme }) =>
    theme.status === "dark"
      ? `background-image: url(${bgDark});`
      : `background-image: url(${bgLight});`}

  .home-page {
    padding: 5rem;
    color: ${({ theme }) => theme.text};

    .home-page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 3rem;
        letter-spacing: 0.625rem;
      }

      .toggeBtn {
        background: transparent;
        border: none;
        ${({ theme }) =>
          theme.status === "dark"
            ? `background-image: url(${sun});`
            : `background-image: url(${moon});`}
        height: 25px;
        width: 25px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
    }

    .form {
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
    }

    .radio {
      width: 25px;
      height: 25px;
      border: 1px solid ${({ theme }) => theme.disabled};
      border-radius: 13px;
      margin-right: 1.5rem;
    }
  }
`;

export default Home;
