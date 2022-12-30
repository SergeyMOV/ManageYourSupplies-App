import styled from "styled-components";

export default function Valueinfo({budget, addvalue, minusvalue}) {
  const Adding = budget + addvalue + minusvalue;
  const Subtract = minusvalue + addvalue;
  return (
    <Valuefields>
      <p>
        Initial Budget &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span> {budget}</span>
        <span>€</span>
      </p>
      <p>
        Expenditures &nbsp;&nbsp; &nbsp;&nbsp;={" "}
        <span data-testid="test">{Subtract}</span>
        <span>€</span>
      </p>
      <p>
        Current Budget &nbsp;{""}= <span>{budget && Adding}</span>
        <span>€</span>
      </p>
    </Valuefields>
  );
}

const Valuefields = styled.section`
  display: flex;
  margin-top: -5.2em;
  flex-direction: column;
  justify-content: flex-end;
  height: 0em;

  p {
    border-bottom: 1px solid;
    width: 12.8em;
  }
`;
