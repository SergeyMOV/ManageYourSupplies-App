import styled from "styled-components";

export default function InOutputFields({change, setChange}) {
  return (
    <Buttonsection>
      <button onClick={() => setChange(change + 50)}>+50€</button>
      <button onClick={() => setChange(change - 50)}>-50€</button>
      <button onClick={() => setChange(change + 100)}>+100€</button>
      <button onClick={() => setChange(change - 100)}>-100€</button>
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
