import styled from "styled-components";
import {MdDeleteForever} from "react-icons/md";
import {RiSave3Fill} from "react-icons/ri";
import {useState,useEffect} from "react";

export default function Progress({
  budget,
  percentage,
  reset,
  setReset,
  onReset,
  spendings,
  setChange,
  change,
}) {
  
  // const [savedpercent, setSavedPercent] = useState("");
  // const [savedbudget, setSavedBudget] = useState("");
  
  function resetClick() {
    setReset(!reset);
    setChange(0) 
    localStorage.setItem("spendings",JSON.stringify(0))
    // setSavedPercent(0);
    // setSavedBudget(0);
  }
  function handleSave() {
    console.log(change)
   // localStorage.setItem("spendings",JSON.stringify(change));
    localStorage.setItem("budget", JSON.stringify(budget));
  }
  // useEffect(() => {
  // if(localStorage.getItem("name")){
  // setSavedPercent(localStorage.getItem("name"))
  // setSavedBudget(localStorage.getItem("budget"))
  // }
  // }, []);
  
  return (
    <Progressmain className="progressmain">
      <ProgressbarContainer>
        <Progressbar value={percentage}></Progressbar>
        <StyledDiv>
            <ProcentageContainer>
              {/* <Procentage1
                onChange={e => setSavedPercent(e.target.value)}
                value={`${percentage}%`}
              />
              <Procentage2
                onChange={e => setSavedBudget(e.target.value)}
                value={Budget && addFive}
              /> */}
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
const Procentage1 = styled.input`
  font-size: 1em;
  background: none;
  border: none;
  text-align: center;
  margin: 0;
  padding-left: 10px;
`;
const Procentage2 = styled.input`
  text-align: center;
  font-size: 1em;
  padding-left: 5px;
  background: none;
  border: none;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding-top: 5px;
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
  transition: 1s;
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

