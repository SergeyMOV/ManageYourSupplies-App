import styled from "styled-components";

export default function Valueinfofields({budget, change}) {
  return (
    <Valuefields>
      <p>
        Initial Budget &nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;
        <span data-testid="test">{budget}</span>
        <span>€</span>
      </p>
      <p>
        Expenditures &nbsp;&nbsp;&nbsp; &nbsp;=&nbsp;&nbsp;{" "}
        <span>{change}</span>
        <span>€</span>
      </p>
      <p>
        Current Budget &nbsp;=&nbsp;&nbsp;{" "}
        <span>{budget ? budget + change : 0}</span>
        <span>€</span>
      </p>
    </Valuefields>
  );
}

const Valuefields = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: 480px) and (max-width: 768px) {
  }
  @media (min-width: 768px) and (max-width: 1280px) {
  }
  @media (min-width: 1024px) and (max-width: 3000px) {
  }
  p {
    border-bottom: 1px solid;
    width: 12.8em;
  }
`;
