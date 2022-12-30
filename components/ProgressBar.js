import styled from "styled-components";
import {MdDeleteForever} from "react-icons/md";
import {RiSave3Fill} from "react-icons/ri";

export default function Progress({
  budget,
  setChange,
  change,
  setBudget,
  setSavedBudget,
  setSavedChanges,
}) {
  const percentage =
    budget !== 0 ? Math.round(((budget + change) / budget) * 100) : 0;
  const spendings = budget + change;

  function resetClick() {
    setChange(0);
    setBudget(0);
    setSavedBudget(0);
    setSavedChanges(0);
  }
  function handleSave() {
    setSavedBudget(budget);
    setSavedChanges(change);
  }

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
  top: -10em;
  margin: 0 auto;
  height: 50vh;
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
  border: 13px solid #4358ff;
  border-radius: 47px 47px;
  height: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
`;

const Progressbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px 33px 20px 20px;
  background-color: #3947ff;
  z-index: -1;
  transition: 0.5s linear;
  ${props => `height: ${props.value}%;`}
`;
const Restorebutton = styled.button`
  cursor: pointer;
  font-size: 1.5em;
  background: none;
  border: none;
`;

const Savebutton = styled.button`
  cursor: pointer;
  font-size: 1.5em;
  background: none;
  border: none;
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
