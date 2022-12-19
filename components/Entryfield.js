import styled from "styled-components";
import React, {useState} from "react";
export default function Entryfield({
  budget,
  onChangeBudget,
  percent,
  onChangePercent,
}) {
  const [currentValue, setCurrentValue] = useState(budget);
  const [percentage, setPercentage] = useState(percent);

  function handleSubmit(event) {
    event.preventDefault();
    onChangeBudget(Number(currentValue));
    onChangePercent(percentage);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Inputfield
        type="number"
        min="10"
        max="9000"
        onChange={event => {
          setCurrentValue(event.target.value);
          setPercentage(0)
        }}
        placeholder="Type your Initial Budget"
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
