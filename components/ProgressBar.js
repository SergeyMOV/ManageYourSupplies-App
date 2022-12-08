import styled from "styled-components";

export default function Progress({budget, percentage, progress, addvalue}) {
  const managepercentage = percentage;
  const addFunf = budget + addvalue + "€";
  const Budget = budget + "€";
  return (
    <Progressmain className="progressmain">
      <Procentage1 value={managepercentage + "%"} />
      <Procentage2 value={Budget && addFunf} readonly />
      <Progressbar value={progress} max="100"></Progressbar>
    </Progressmain>
  );
}

const Progressmain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8.9em;
  transform: rotate(-90deg);
`;
const Procentage1 = styled.input`
  transform: rotate(90deg);
  position: absolute;
  width: 3.2em;
  font-size: 1em;
  background: none;
  border: none;
  text-align: center;
  top: 48%;
  left: 57%;
  margin: 0;
`;
const Procentage2 = styled.input`
  transform: rotate(90deg);
  width: 15%;
  text-align: center;
  position: absolute;
  font-size: 16px;
  background: none;
  border: none;
  margin: 0;
  top: 46%;
  left: 49%;
`;
const Progressbar = styled.progress`
  width: 82%;
  height: 13em;
  color: black;
`;
