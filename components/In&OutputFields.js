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
  position: absolute;
  top: 35%;
  width: 100px;
  button {
    width: 60px;
  }
`;
