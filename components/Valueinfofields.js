import styled from "styled-components";

export default function Valueinfo({budget}) {
  return (
    <Valuefields>
      <p>
        Initial Value &nbsp;&nbsp;&nbsp;&nbsp;= <span>{budget}</span>
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
  justify-content: flex-end;
  height: 12em;

  p {
    border-bottom: 1px solid;
    width: 10.5em;
  }
`;
