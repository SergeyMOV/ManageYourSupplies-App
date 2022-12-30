import styled from "styled-components";

export default function Valueinfofields({budget, change}) {
  return (
    <Valuefields>
      <p>
        Initial Budget &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span>{budget}</span>
        <span>€</span>
      </p>
      <p>
        Expenditures &nbsp;&nbsp;&nbsp; &nbsp;= <span>{change}</span>
        <span>€</span>
      </p>
      <p>
        Current Budget &nbsp;= <span>{budget + change}</span>
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
  height: 0;
  p {
    border-bottom: 1px solid;
    width: 12.8em;
  }
`;
