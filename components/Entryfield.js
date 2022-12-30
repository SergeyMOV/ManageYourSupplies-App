import styled from "styled-components";
import React, {useState} from "react";
export default function Entryfield({budget, setBudget}) {
  const [currentValue, setCurrentValue] = useState(budget);

  function handleSubmit(event) {
    event.preventDefault();
    setBudget(Number(currentValue));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Inputfield
        type="number"
        min="10"
        max="9000"
        onChange={event => {
          setCurrentValue(event.target.value);
        }}
        placeholder={budget ? budget : "Type your Initial Budget"}
      />
      <Styledbutton type="submit">Start</Styledbutton>
    </form>
  );
}

const Styledbutton = styled.button`
  height: 2.3em;
`;
const Inputfield = styled.input`
  margin-top: 5%;
  width: 150px;
  height: 30px;
`;
