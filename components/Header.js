import styled from "styled-components";
import Image from "next/image";
import ManageYourSupplies from "../public/Images/ManageYourSupplies_icon.svg";
import ManageYourSuppliesTitle from "../public/Images/ManageYourSupplies_wording.svg";
export default function Header() {
  return (
    <Header1>
      <Head
        src={ManageYourSupplies}
        alt={"ManageYourSupplies"}
      ></Head>
      <Img
        src={ManageYourSuppliesTitle}
        alt={"ManageYourSuppliesTitle"}
      />
    </Header1>
  );
}

const Head = styled(Image)`
  width:8em;
  height:auto;
`;
const Img = styled(Image)`
  background-color: #cae3ff;
`;
const Header1 = styled.header`
  display: flex;
  height: 5em;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
`;
