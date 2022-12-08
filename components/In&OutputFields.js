import React, {useState} from "react";
import styled from "styled-components";

export default function Valuefields({
  addingvalue,
  onChangeValue,
  subtractvalue,
  onChangeSubtract,
  handleaddvalue1,
  handlesubtractvalues,
}) {
  const [addvalue, setAddvalue] = useState(addingvalue);
  const [minusvalue, setMinusvalue] = useState(subtractvalue);

  function Addvalue() {
    setAddvalue(0);
    onChangeValue(addvalue);
  }

  function Subtractvalue() {
    setMinusvalue(0);
    onChangeSubtract(minusvalue);
  }

  return (
    <Buttonsection>
      <button onClick={Addvalue}>+50€</button>
      <button onClick={Subtractvalue}>-50€</button>
      <button onClick={handlesubtractvalues}>+100€</button>
      <button onClick={handleaddvalue1}>-100€</button>
    </Buttonsection>
  );
}

const Buttonsection = styled.div`
  display: flex;
  flex-direction: column;
  height: 8em;
  justify-content: center;
  button {
    width: 15%;
  }
`;
