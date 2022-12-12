import styled from "styled-components";
import {MdOutlineSettingsBackupRestore} from "react-icons/md";
import {useRef} from "react";

export default function Progress({
  budget,
  percentage,
  progress,
  addvalue,
  minusvalue,
}) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  function restoreClick() {
    ref.current.value = "0€";
    ref2.current.value = "0%";
    ref3.current.value = "0";
  }

  const managepercentage = percentage;
  const addFive = budget + addvalue + minusvalue + "€";
  const Budget = budget + "€";
  return (
    <Progressmain className="progressmain">
      <Procentage1 ref={ref2} value={managepercentage + "%"} />
      <Procentage2 ref={ref} value={Budget && addFive} />
      <Restorebutton onClick={restoreClick}>
        <MdOutlineSettingsBackupRestore />
      </Restorebutton>
      <Progressbar ref={ref3} value={progress} max="100"></Progressbar>
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
const Restorebutton = styled.button`
  position: absolute;
  left: 44%;
  top: 31%;
  cursor: pointer;
  font-size: 1.4em;
  background: none;
  border: none;
`;
