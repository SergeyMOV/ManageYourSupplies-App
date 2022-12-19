import styled from "styled-components";
import {MdDeleteForever} from "react-icons/md";
import {RiSave3Fill} from "react-icons/ri";
import {useState} from "react";
export default function Progress({budget, addvalue, minusvalue, percentage,Reset,onReset}) {
  const [reset,setReset] = useState(Reset)

  function resetClick() {
    setReset(0);
    onReset(reset);
  }
  function saveClick(){


  }
  const addFive = budget + addvalue + minusvalue + "€";
  const Budget = budget + "€";

  return (
    <Progressmain className="progressmain">
      <ProgressbarContainer>
        <Progressbar value={percentage}></Progressbar>
        <StyledDiv>
          <ProcentageContainer>
            <Procentage1 value={`${percentage}%`}/>
            <Procentage2 value={Budget && addFive} />
          </ProcentageContainer>
          <ButtonContainer>
            <Restorebutton onClick={resetClick}>
              <MdDeleteForever />
            </Restorebutton>
            <Savebutton onClick={saveClick}>
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
  top:-10em;
  margin:0 auto;
  height: 50vh;
  
`;
const Procentage1 = styled.input`
  font-size: 1em;
  background: none;
  border: none;
  text-align: center;
  margin: 0;
  padding-left:10px;
`;
const Procentage2 = styled.input`
  text-align: center;
  font-size: 1em;
  padding-left:5px;
  background: none;
  border: none;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: center;
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
  border: 13px solid #4358FF;
  border-radius: 47px 47px;
  height: 100%;
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
  background-color:#3947FF;
  z-index:-1;
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
  cursor:pointer;
  font-size: 1.5em;
  background: none;
  border: none;
`;

const StyledDiv = styled.div`
  position: absolute;
  bottom: 37%;
  left: 25%;
  right:25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
