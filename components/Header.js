import styled from "styled-components";
import Image from "next/image";
import ManageYourSupplies from "../public/Images/ManageYourSupplies_icon.svg";
import ManageYourSuppliesTitle from "../public/Images/ManageYourSupplies_wording.svg";
export default function Header() {
  return (
    <Header1>
      <Head
        src={ManageYourSupplies}
        width="100"
        height="100"
        alt={"ManageYourSupplies"}
      ></Head>
      <Bild
        src={ManageYourSuppliesTitle}
        width="260"
        alt={"ManageYourSuppliesTitle"}
      />
    </Header1>
  );
}

const Head = styled(Image)`
  height: 10em;
`;
const Bild = styled(Image)`
  background-color: white;
`;
const Header1 = styled.header`
  display: flex;
  height: 5em;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
`;
