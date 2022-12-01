import styled from "styled-components";
export default function Progress() {
  return (
    <Progressmain className="progressmain">
      <Procentage1 className="Procentage">
        0<span>%</span>
      </Procentage1>
      <Procentage2 className="Procentage2">
        0<span>€</span>
      </Procentage2>
      <Progressbar value="0" max="100"></Progressbar>
    </Progressmain>
  );
}

const Progressmain = styled.div`
  position: absolute;
  left: 11%;
  top: 271px;
  transform: rotate(-90deg);
`;
const Procentage1 = styled.p`
  transform: rotate(90deg);
  position: absolute;
  top: 48%;
  left: 50%;
  margin: 0;
`;
const Procentage2 = styled.p`
  transform: rotate(90deg);
  width: 40px;
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
