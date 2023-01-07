import styled from "styled-components";
import React, {useState} from "react";
export default function Entryfield({budget, setBudget}) {
  const [currentValue, setCurrentValue] = useState(budget);

  function handleSubmit(event) {
    event.preventDefault();
    if (currentValue < 10) {
      setCurrentValue("");
    } else {
      setBudget(Number(currentValue));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Inputfield
        type="number"
        min="10"
        max="10000"
        onChange={event => {
          setCurrentValue(event.target.value);
        }}
        placeholder={"Type your Local Budget"}
      />
      <Styledbutton type="submit">Start</Styledbutton>
    </form>
  );
}

const Styledbutton = styled.button`
  height: 2.7em;
  border-radius: 30px;
  box-shadow: #422800 0px 1px 5px 0;
  color: #e1e8e1;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  margin-left: -3em;
  background-color: #4f65ff;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  letter-spacing: 2px;

  :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;
const Inputfield = styled.input`
  margin-top: 5%;
  border: none;
  width: 14em;
  background-color: #e8f0ff;
  border-radius: 20px 20px;
  height: 2.5em;

  :focus {
    outline: none;
    border: 1px solid #4f65ff;
  }
`;
