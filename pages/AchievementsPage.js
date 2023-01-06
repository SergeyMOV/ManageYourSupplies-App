import styled from "styled-components";
import {AiTwotoneHome} from "react-icons/ai";
import Link from "next/link";
import AddGoals from "../components/AddGoals";
import Goals from "../components/Goals";
import {HiClipboardList} from "react-icons/hi";
import {Icon} from "@iconify/react";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Icongoal from "/Users/sm/Desktop/Icongoal.gif";
import {useLocalStorage} from "../components/useLocalStorage";

export default function Achievements() {
  const [goals, setGoals] = useState([]);
  const [savedgoals, setSavedGoals] = useLocalStorage("goals", []);
  useEffect(() => {
    if (savedgoals.length > 0) {
      setGoals(savedgoals);
    }
  }, [savedgoals]);

  const Addgoal = value => {
    if (value) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: value,
        complete: false,
      };
      setGoals([...goals, newItem]);
      setSavedGoals([...goals, newItem]);
      localStorage.getItem("goals", setSavedGoals);
    }
  };

  const removeGoals = id => {
    setGoals([...goals.filter(goal => goal.id !== id)]);
    setSavedGoals([...goals.filter(goal => goal.id !== id)]);
  };
  const handleCheckboxChange = id => {
    const newGoalList = goals.map(goal => {
      if (goal.id === id) {
        return {...goal, complete: !goal.complete};
      } else {
        return goal;
      }
    });
    setGoals(newGoalList);
    setSavedGoals(newGoalList);
  };
  function handleEditSave(ID, textValue) {
    setSavedGoals(
      goals.map(goal => {
        if (goal.id === ID) {
          return {...goal, task: textValue};
        } else {
          return goal;
        }
      })
    );
    setGoals(
      goals.map(goal => {
        if (goal.id === ID) {
          return {...goal, task: textValue};
        } else {
          return goal;
        }
      })
    );
  }
  return (
    <Main>
      <Header>
        <Image src={Icongoal} width={100} height={90} alt="" />
        Goals & Achievements
        <Image src={Icongoal} width={100} height={90} alt="" />
      </Header>
      <br></br>
      <AddGoals Addgoal={Addgoal} />
      <br></br>
      <SetGoalTitle>
        Stipulated Goals: {goals.filter(goal => !goal.complete).length}
        <GoalListIcon />
      </SetGoalTitle>
      <hr></hr>
      <ExistingGoalsList>
        {goals
          .filter(goal => !goal.complete)
          .map(goal => {
            return (
              <Goals
                handleEditSave={handleEditSave}
                handleChange={handleCheckboxChange}
                goal={goal}
                key={goal.id}
                removeGoals={removeGoals}
              />
            );
          })}
      </ExistingGoalsList>
      <SetGoalTitle>
        Achieved &nbsp;&nbsp;Goals:&nbsp;
        {goals.filter(goal => goal.complete).length}
        <Icon
          icon="grommet-icons:achievement"
          color="rgb(204 171 29)"
          fontSize="2.2em"
        />
      </SetGoalTitle>
      <hr></hr>
      <AchievedGoalsList>
        {goals
          .filter(goal => goal.complete)
          .map(goal => {
            return (
              <Goals
                handleEditSave={handleEditSave}
                handleChange={handleCheckboxChange}
                goal={goal}
                key={goal.id}
                removeGoals={removeGoals}
              />
            );
          })}
      </AchievedGoalsList>
      <Footer>
        <Link className="Homebutton" href="/">
          <AiTwotoneHome />
        </Link>
      </Footer>
    </Main>
  );
}

const Main = styled.div`
background-color:#CAE3FF;
.Homebutton {
  text-align:center;
  border:1px solid;
  text-decoration: none;
  color: #CAE3FF;
  border-radius:8px 8px;
  :visited {
    transition: 1s;
  }
`;
const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #322eb8;
  font-size: 1.4em;
  height: 3em;
  letter-spacing: 0.1em;
  border: 1px solid black;
  text-align: center;
`;
const ExistingGoalsList = styled.div`
  height: auto;
`;
const SetGoalTitle = styled.h3`
  color: #5a5252;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: 400;
`;

const AchievedGoalsList = styled.div`
  width: 100%;
`;
const GoalListIcon = styled(HiClipboardList)`
  font-size: 2.2em;
  color: #1538b8;
`;

const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  font-size: 2.2em;
  bottom: 0;
  text-align: center;
  background-color: #2c34ae;
`;
