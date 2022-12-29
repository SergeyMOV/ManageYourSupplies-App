import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/InOutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
import Header from "../components/Header";
import { useLocalStorage } from "../components/useLocalStorage";
import styled from "styled-components";
import {useState, useEffect} from "react";

export default function Home() {
  const [localstorage, setLocalStorage] = useLocalStorage("budget", 0)
  const [budget, setBudget] = useState(0)
  const [reset, setReset] = useState(false);
  const [currentbudget, setCurrentBudget] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [addvalue, setAddvalue] = useState(0);
  const [minusvalue, setMinusValue] = useState(0);
  const [change,setChange] = useLocalStorage("spendings",0);
  const spendings = budget + change;
  console.log(change)
  useEffect(() => {
    if (localstorage || localstorage === 0) {
      setBudget(localstorage);
    }
  }, [localstorage]);

  useEffect(() => {
    setCurrentBudget(budget + addvalue + minusvalue);
  }, [addvalue, minusvalue, budget]);

  useEffect(() => {
    if (budget) {
      setPercentage(Math.round((spendings / budget) * 100));
    }
  }, [budget, currentbudget]);
  useEffect(()=>{
    if(minusvalue || addvalue){
        setChange(minusvalue+addvalue)
    }
    },[minusvalue, addvalue,reset])
  function handleChangeBudget(newBudget) {
    setBudget(newBudget);
  }
  function handlePrecent() {
    setPercentage(percentage);
  }
  function handleAdd50() {
    setAddvalue(addvalue + 50);
  }
  function handleAdd100() {
    setAddvalue(addvalue + 100);
  }
  function handleSubtract50() {
    setMinusValue(minusvalue - 50);
  }
  function handleSubtract100() {
    setMinusValue(minusvalue - 100);
  }
  function handleReset() {
    setReset(0);
    setPercentage(0);
    setBudget(0);
    setAddvalue(0);
    setMinusValue(0);
    setLocalStorage(0);
  }
  return (
    <Homepage>
      <Header />
      <Entryfield
        budget={budget}
        percentage={percentage}
        onChangeBudget={handleChangeBudget}
        onChangePercent={handlePrecent}
      />
      <Navmenu />
      <Valuefields
        handleAdd100={handleAdd100}
        handleSubtract50={handleSubtract50}
        handleAdd50={handleAdd50}
        handleSubtract100={handleSubtract100}
      />
      <Progress
        percentage={percentage}
        budget={budget}
        setReset={setReset}
        reset={reset}
        spendings={spendings}
        setChange={setChange}
        onReset={handleReset}
      />
      <Valueinfo
        reset={reset}
        minusvalue={minusvalue}
        addvalue={addvalue}
        budget={budget}
      />
    </Homepage>
  );
}

const Homepage = styled.div`
  border: none;
`;
