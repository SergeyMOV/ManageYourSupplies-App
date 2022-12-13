import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/InOutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
import Header from "../components/Header";
import styled from "styled-components";
import {useState} from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [addvalue, setAddvalue] = useState(0);
  const [minusvalue, setMinusValue] = useState(0);
  function handleChangeBudget(newBudget) {
    setBudget(newBudget);
  }
  function handlePrecent(newPercentage) {
    setPercentage(newPercentage);
  }
  function handleProgress() {
    setProgress(progress => progress + 100);
  }
  function handleAdd50() {
    setAddvalue(addvalue => addvalue + 50);
  }
  function handleAdd100() {
    setAddvalue(addvalue => addvalue + 100);
  }
  function handleSubtract50() {
    setMinusValue(minusvalue => minusvalue - 50);
  }
  function handleSubtract100() {
    setMinusValue(minusvalue => minusvalue - 100);
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
      <Valuefields
        addvalue={addvalue}
        minusvalue={minusvalue}
        handleAdd100={handleAdd100}
        handleSubtract50={handleSubtract50}
        handleAdd50={handleAdd50}
        handleSubtract100={handleSubtract100}
      />
      <Progress
        addvalue={addvalue}
        progress={progress}
        percentage={percentage}
        budget={budget}
        minusvalue={minusvalue}
      />
      <Valueinfo  minusvalue={minusvalue} addvalue={addvalue} budget={budget} />
    </Homepage>
  );
}

const Homepage = styled.div`
  border: none;
`;
