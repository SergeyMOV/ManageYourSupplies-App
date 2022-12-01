import styled from "styled-components";

export default function Valueinfo() {
  return (
    <Valuefields>
      <p>
        Initial Value &nbsp;&nbsp;&nbsp;&nbsp;= <span>0</span>
        <span>€</span>
      </p>
      <p>
        {" "}
        Expenditure &nbsp;&nbsp;&nbsp;= <span>0</span>
        <span>€</span>
      </p>
      <p>
        Current Value = <span>0</span>
        <span>€</span>
      </p>
    </Valuefields>
  );
}

const Valuefields = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 110px;
  position: absolute;
  top: 574px;

  p {
    margin: 0;
    border-bottom: 1px solid;
    width: 170px;
  }
`;
