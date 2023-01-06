import styled from "styled-components";
import Image from "next/image";
import ManageYourSupplies from "../public/Images/ManageYourSupplies_icon.svg";
import ManageYourSuppliesTitle from "../public/Images/ManageYourSupplies_wording.svg";
export default function Header() {
  return (
    <Header1>
      <Head
        src={ManageYourSupplies}
        width="120"
        height="100"
        alt={"ManageYourSupplies"}
      ></Head>
      <Img
        src={ManageYourSuppliesTitle}
        width="auto"
        height="auto"
        alt={"ManageYourSuppliesTitle"}
      />
    </Header1>
  );
}

const Head = styled(Image)`
  height: 10em;
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
