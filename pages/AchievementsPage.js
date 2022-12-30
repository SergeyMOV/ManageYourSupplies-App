import styled from "styled-components";
import {AiTwotoneHome} from "react-icons/ai";
import Link from "next/link";
import React, {useState} from "react";
import {HiClipboardList} from "react-icons/hi";

export default function Achievements() {
  const [goals, setGoals] = useState("");

  function handleSetGoals(e) {
    e.preventDefault();
    setGoals(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setGoals("");
  }
  return (
    <>
      <Header>
        <Link className="Homebutton" href="/">
          <AiTwotoneHome />
        </Link>
        &nbsp;Goals & Achievements
      </Header>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Goalsfield
          type="text"
          placeholder="Add your planned Goals"
          onChange={handleSetGoals}
          value={goals}
        ></Goalsfield>
        <Addbutton type="submit">Add Goal</Addbutton>
      </Form>
      <br></br>
      <SetGoalTitle>
        Stipulated Goals
        <GoalListIcon />
      </SetGoalTitle>
      <hr></hr>
      <ExistingGoalsList></ExistingGoalsList>
    </>
  );
}
const Header = styled.h2`
display:flex;
justify-content:center;
align-items:center;
height:3em;
letter-spacing:0.1em;
  border: 1px solid;
  text-align: center;
  .Homebutton {
    position: absolute;
    left: 0;
    text-decoration: none;
    color: #214d9e;
    font-size: 1.1em;
    transition: 1s;
    :visited {
      color: #214d9e;
      transition: 1s;
    }
`;

const Form = styled.form``;

const Goalsfield = styled.input`
  width: 50%;
  height: 40%;
`;
const Addbutton = styled.button``;
const ExistingGoalsList = styled.div`
  height: auto;
`;
const SetGoalTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1.4em;
`;
const GoalListIcon = styled(HiClipboardList)`
  font-size: 2em;
`;
