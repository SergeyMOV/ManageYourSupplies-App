import styled from "styled-components";
export default function Entryfield() {
  return (
    <>
      <Inputfield min="1" max="9000" type="number" />
      <Styledbutton>Start</Styledbutton>
    </>
  );
}

const Styledbutton = styled.button`
  height: 30px;
`;
const Inputfield = styled.input`
  width: 150px;
  height: 30px;
`;
