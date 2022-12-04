import styled from "styled-components";

export default function Valuefields() {
  return (
    <Buttonsection>
      <button>+50€</button>
      <button>-50€</button>
      <button>+100€</button>
      <button>-100€</button>
    </Buttonsection>
  );
}

const Buttonsection = styled.div`
  display:flex;
  flex-direction:column;
  height:115px;
  justify-content:center;
  button {
    width: 60px;
  }
`;
