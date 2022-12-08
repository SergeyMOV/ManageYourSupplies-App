import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/In&OutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
import Header from "../components/Header";
import styled from "styled-components"
import {useState} from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [addvalue,setAddvalue] = useState(0);
  // const [minusvalue,setMinusvalue] = useState(0);
  function handleChangeBudget(newBudget) {
    setBudget(newBudget);
  }
  function handlePrecent(newPercentage) {
    setPercentage(newPercentage);
  }
  
  function handleProgress(newProgress) {
    setProgress(newProgress);
  }
  function handleaddvalue(){
    setAddvalue(addvalue => addvalue + 50)
  }
  function handlesubtractvalue(){
    // setMinusvalue(minusvalue => minusvalue - 50);
    setAddvalue(addvalue => addvalue - 50)
  }
  function handleaddvalue1(){
    // setAddvalue(addvalue => addvalue + 100)
    setAddvalue(addvalue => addvalue - 100)
  }
  function handlesubtractvalues(){
    setAddvalue(addvalue => addvalue + 100)
  }
  return (
    <Homepage>
      <Header />
      <Entryfield
        progress={progress}
        budget={budget}
        percentage={percentage}
        onChangeBudget={handleChangeBudget}
        onChangePercent={handlePrecent}
        onChangeProgress={handleProgress}
      />
      <Navmenu />
      <Valuefields addvalue={addvalue} handlesubtractvalues={handlesubtractvalues} onChangeSubtract={handlesubtractvalue} onChangeValue={handleaddvalue} handleaddvalue1={handleaddvalue1} />
      <Progress addvalue={addvalue} progress={progress} percentage={percentage} budget={budget} />
      <Valueinfo budget={budget} />
    </Homepage>
  );
}




const Homepage = styled.div`
border:none;
`
