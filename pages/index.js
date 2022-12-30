import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import InOutputFields from "../components/InOutputFields";
import Navmenu from "../components/Navbar";
import Valueinfofields from "../components/Valueinfofields";
import Header from "../components/Header";
import {useLocalStorage} from "../components/useLocalStorage";
import styled from "styled-components";
import {useState, useEffect} from "react";

export default function Home() {
  const [savedBudget, setSavedBudget] = useLocalStorage("budget", 0);
  const [savedChanges, setSavedChanges] = useLocalStorage("changes", 0);
  const [budget, setBudget] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    if (savedBudget || savedBudget === 0) {
      setBudget(savedBudget);
    }
  }, [savedBudget]);
  useEffect(() => {
    if (savedChanges || savedChanges === 0) {
      setChange(savedChanges);
    }
  }, [savedChanges]);

  return (
    <Homepage>
      <Header />
      <Entryfield budget={budget} setBudget={setBudget} />
      <Navmenu />
      <InOutputFields
        setChange={setChange}
        change={change}
        setSavedChanges={setSavedChanges}
        savedChanges={savedChanges}
      />
      <Progress
        change={change}
        setBudget={setBudget}
        setChange={setChange}
        budget={budget}
        setSavedChanges={setSavedChanges}
        setSavedBudget={setSavedBudget}
      />
      <Valueinfofields change={change} budget={budget} />
    </Homepage>
  );
}

const Homepage = styled.div`
  border: none;
`;
