import styled from "styled-components";
import React, {useState} from "react";
export default function Entryfield({budget,onChangeBudget,percent,onChangePercent,progress,onChangeProgress}) {
  const [currentValue, setCurrentValue] = useState(budget);
  const [percentage, setPercentage] = useState(percent);
  const [progressvalue, setProgressvalue] = useState(progress);

  function handleSubmit(event) {
    event.preventDefault();
    onChangeBudget(Number(currentValue));
    onChangePercent((percentage));
    onChangeProgress((progressvalue));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Inputfield
        type="number"
        min="10"
        max="9000"
        onChange={event => {
          setCurrentValue(event.target.value);
          setPercentage(100);
          setProgressvalue(100);
        }}
      />
      <Styledbutton type="submit">Start</Styledbutton>
    </form>
  );
}

const Styledbutton = styled.button`
  height: 30px;
`;
const Inputfield = styled.input`
  margin-top: 20px;
  width: 150px;
  height: 30px;
`;
