import Entryfield from "../components/Entryfield";
import Progress from "../components/ProgressBar";
import Valuefields from "../components/In&OutputFields";
import Navmenu from "../components/Navbar";
import Valueinfo from "../components/Valueinfofields";
export default function Home() {
  return (
    <>
      <Entryfield />
      <Navmenu />
      <Valuefields />
      <Progress />
      <Valueinfo />
    </>
  );
}
