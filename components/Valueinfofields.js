import styled from "styled-components";

export default function Valueinfo({budget,addvalue,minusvalue }) {
  const Adding = budget + addvalue + minusvalue;
  const Subtract = minusvalue;
  return (
    <Valuefields>
      <p>
        Initial Value &nbsp;&nbsp;&nbsp;&nbsp;= <span>{budget}</span>
        <span>€</span>
      </p>
      <p>
        Expenditure &nbsp;&nbsp;&nbsp;= <span>{Subtract}</span>
        <span>€</span>
      </p>
      <p>
        Saved Value &nbsp; &nbsp;{""}= <span>{budget && Adding}</span>
        <span>€</span>
      </p>
    </Valuefields>
  );
}

const Valuefields = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 12em;

  p {
    border-bottom: 1px solid;
    width: 11.5em;
  }
`;
