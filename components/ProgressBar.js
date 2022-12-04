import styled from "styled-components";

export default function Progress({budget, percentage, progress}) {
  return (
    <Progressmain className="progressmain">
      <Procentage1 className="Procentage">
        {percentage}
        <span>%</span>
      </Procentage1>
      <Procentage2 className="Procentage2">
        {budget}
        <span>€</span>
      </Procentage2>
      <Progressbar value={progress} max="100"></Progressbar>
    </Progressmain>
  );
}

const Progressmain = styled.div`
  position: absolute;
  left: 11%;
  top: 297px;
  transform: rotate(-90deg);
`;
const Procentage1 = styled.p`
  transform: rotate(90deg);
  position: absolute;
  width: 42px;
  text-align: center;
  top: 48%;
  left: 48%;
  margin: 0;
`;
const Procentage2 = styled.p`
  transform: rotate(90deg);
  width: 53px;
  text-align: center;
  position: absolute;
  margin: 0;
  top: 47%;
  left: 38%;
`;
const Progressbar = styled.progress`
  width: 320px;
  height: 223px;
  color: black;
`;
