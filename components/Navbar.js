import styled from "styled-components";
import {GiPayMoney} from "react-icons/gi";
import {GiAchievement} from "react-icons/gi";
import Link from "next/link";

export default function Navmenu() {
  return (
    <Navbar>
      <li>
        <Styledbutton>
          <GiPayMoney />
          <Link className="Expenditure" href="/ExpenditurePage">
            {" "}
            Detailed Expenditures
          </Link>
        </Styledbutton>
      </li>
      <li>
        <Styledbutton>
          <GiAchievement />
          <Link className="Expenditure" href="#">
            {" "}
            Goals & Achievements
          </Link>
        </Styledbutton>
      </li>
    </Navbar>
  );
}
const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  height: 10em;
  justify-content: center;
  li {
    float: right;
    border-right: none;
    border: 1px solid;
    border-radius: 10px 10px;
    border-right: none;
  }
`;
const Styledbutton = styled.button`
  text-decoration: none;
  color: #4358ff;
  font-size: 2.2em;
  border-radius: 10px 10px;
  border-right: none;
  .Expenditure {
    display: none;
    font-size: 0.6em;
    text-decoration: none;
    color: #005b8d;
  }
  :hover {
    border-radius: 5px 5px;
    .Expenditure {
      display: inline;
    }
  }
`;
