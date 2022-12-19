import React, {useState} from "react";
import styled from "styled-components";

export default function Valuefields({
  addingvalue,
  handleAdd50,
  subtractvalue,
  handleSubtract50,
  handleSubtract100,
  handleAdd100,
}) {
  const [addvalue, setAddvalue] = useState(addingvalue);
  const [minusvalue, setMinusvalue] = useState(subtractvalue);

  function Addvalue() {
    setAddvalue(0);
    handleAdd50(addvalue);
  }

  function Subtractvalue() {
    setMinusvalue(0);
    handleSubtract50(minusvalue);
  }

  return (
    <Buttonsection>
      <button onClick={Addvalue}>+50€</button>
      <button onClick={Subtractvalue}>-50€</button>
      <button onClick={handleAdd100}>+100€</button>
      <button onClick={handleSubtract100}>-100€</button>
    </Buttonsection>
  );
}

const Buttonsection = styled.div`
width: 15%;
  display: flex;
  flex-direction: column;
  height: 9.9em;
  justify-content: center;
  button {
    width: 100%;
  }
`;
