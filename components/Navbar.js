import styled from "styled-components";
import {GiPayMoney} from "react-icons/gi";
import {GiAchievement} from "react-icons/gi";
import {FaLightbulb} from "react-icons/fa";

export default function Navmenu() {
  return (
    <Navbar>
      <li>
        <Link href="/Page2">
          <GiPayMoney /> <span className="Expenditure">Expenditure</span>
        </Link>
      </li>
      <li>
        <Link href="/Page3">
          <GiAchievement />
        </Link>
      </li>
      <li>
        <Lamplink href="/Page4">
          <FaLightbulb />
        </Lamplink>
      </li>
    </Navbar>
  );
}
const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  li {
    float: right;
    border: 1px solid;
    border-right: none;
    border-radius: 10px 10px;
  }
  span {
    font-size: 20px;
    display: none;
  }
`;
const Link = styled.a`
text-decoration:none;
    color:#214D9E
    cursor:pointer;
    width:40px;
    font-size:40px;
    transition:1s;
    :visited{
      color:#214D9E;
      transition:1s;
    }
    :focus{
    color:#FFC25F;
    padding-right:7px;
    }
`;

const Lamplink = styled.a`
  text-decoration: none;
  color: #214d9e;
  cursor: pointer;
  width: 40px;
  font-size: 40px;
  transition: 1s;
  :focus {
    padding-right: 7px;
    color: #ffc25f;
  }
`;
