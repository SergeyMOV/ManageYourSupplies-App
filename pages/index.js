import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/In&OutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
import Header from "../components/Header";
import {useState} from "react";

export default function Home() {
  const [budget, setBudget] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const [progress, setProgress] = useState(0);
  function handleChangeBudget(newBudget) {
    setBudget(newBudget);
  }
  function handlePrecent(newPercentage){
    setPercentage(newPercentage);
  }
  function handleProgress(newProgress){
    setProgress(newProgress);
  }
  
  return (
    <>
      <Header />
      <Entryfield progress={progress} budget={budget} percentage={percentage} onChangeBudget={handleChangeBudget} onChangePercent={handlePrecent} onChangeProgress={handleProgress}  />
      <Navmenu />
      <Valuefields />
      <Progress progress={progress} percentage={percentage} budget={budget} />
      <Valueinfo  budget={budget}/>
    </>
  );
}
