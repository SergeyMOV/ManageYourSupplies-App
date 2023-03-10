import styled from "styled-components";
import {MdDeleteForever} from "react-icons/md";
import {RiSave3Fill} from "react-icons/ri";
import React, {useState} from "react";
import Dialog from "../components/Dialog";

export default function Progress({
  budget,
  setChange,
  change,
  setBudget,
  setSavedBudget,
  setSavedChanges,
}) {
  const [showAlert, setShowAlert] = useState(false);
  const percentage =
    budget !== 0 ? Math.round(((budget + change) / budget) * 100) : 0;
  const spendings = budget + change;

  function resetClick() {
    if (spendings) {
      setShowAlert(true);
    } else {
      ("");
    }
  }
  function handleSave() {
    setSavedBudget(budget);
    setSavedChanges(change);
  }

  const confirm = () => {
    setShowAlert(false);
    setChange(0);
    setBudget(0);
    setSavedBudget(0);
    setSavedChanges(0);
  };
  const cancel = () => {
    setShowAlert(false);
  };

  return (
    <Progressmain className="progressmain">
      <ProgressbarContainer>
        <Progressbar value={percentage}></Progressbar>
        <StyledDiv>
          <ProcentageContainer>
            <p>&nbsp;{percentage + "%"}</p>
            <p>{spendings + "€"}</p>
          </ProcentageContainer>
          <ButtonContainer>
            <Restorebutton onClick={resetClick}>
              <MdDeleteForever />
            </Restorebutton>
            <Savebutton onClick={handleSave}>
              <RiSave3Fill />
            </Savebutton>
          </ButtonContainer>
        </StyledDiv>
      </ProgressbarContainer>
      <Dialog
        show={showAlert}
        title=""
        description="Are you sure that you want to Delete your Budget and its Changes from all Fields in this Page?"
        cancel={cancel}
        confirm={confirm}
      />
    </Progressmain>
  );
}

const Progressmain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  top: -14em;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding-top: 0.5em;
`;

const ProcentageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ProgressbarContainer = styled.div`
  width: 50%;
  border: 8px solid #4358ff;
  border-radius: 47px 47px;
  height: 20em;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width:480px) and (max-width:768px) {
    border-radius: 70px 70px;
    width:40%;
    }
  @media (min-width:768px) and (max-width:1280px) {
  border-radius: 50px 50px;
  width:25%;
  border: 8px solid #4358ff;
  height:25em;
  }
  @media (min-width:1024px) and (max-width:1780px){
    border-radius: 100px 100px;
    width:25%;
    border: 8px solid #4358ff;
    height:25em;
  }
`;

const Progressbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 37px 37px;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #cae3ff 0,
    #6994ff 100%
  );
  transition: 0.5s linear;
  ${props => `height: ${props.value}%;`}
  @media (min-width:1024px) and (max-width:1780px){
    border-radius:9px;
  }
`;
const Restorebutton = styled.button`
  font-size: 1.5em;
  color: #ad3f17;
  appearance: none;
  border-radius: 13px 13px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, sans-serif;
  font-weight: 700;
  letter-spacing: -0.24px;
  margin: 0;
  outline: none;
  quotes: auto;
  text-decoration: none;
  user-select: none;
  background: none;
  transform: scale(1.125);
  -webkit-user-select: none;
  touch-action: manipulation;
  :active {
    transform: scale(0.9);
    background-color: #cae3ff;
    transition: all 0.15s;
  }
`;

const Savebutton = styled.button`
  cursor: pointer;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #0c3cff;
  box-sizing: border-box;
  cursor: pointer;
  letter-spacing: -0.24px;
  margin: 0;
  outline: none;
  quotes: auto;
  text-decoration: none;

  user-select: none;
  background: none;
  transform: scale(1.125);
  -webkit-user-select: none;
  touch-action: manipulation;
  :active {
    transform: scale(0.9);
    transition: all 0.15s;
    background-color: #cae3ff;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  bottom: 37%;
  left: 25%;
  right: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
