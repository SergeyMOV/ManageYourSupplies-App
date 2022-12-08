import styled from "styled-components";
import {GiPayMoney} from "react-icons/gi";
import {GiAchievement} from "react-icons/gi";
import {FaLightbulb} from "react-icons/fa";
import Link from "next/link";

export default function Navmenu() {
  return (
    <Navbar>
      <li>
        <Styledbutton>
          <GiPayMoney />
          <Link className="Expenditure" href="/ExpenditurePage">
            {" "}
            All Expenditures
          </Link>
        </Styledbutton>
      </li>
      <li>
        <Styledbutton>
          <GiAchievement />
          <Link className="Expenditure" href="#">
            {" "}
            Achievements
          </Link>
        </Styledbutton>
      </li>
      <li>
        <Lampbutton>
          <FaLightbulb />
          <Link className="Expenditure" href="#">
            Tips & Guidance
          </Link>
        </Lampbutton>
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
    border-right: none;
    border: 1px solid;
    border-radius: 10px 10px;
    border-right: none;
  }
`;
const Styledbutton = styled.button`
  text-decoration: none;
  color: #005B8D;
  font-size: 2.2em;
  border-radius: 10px 10px;
  border-right: none;
  .Expenditure {
    display: none;
    font-size: 0.6em;
    text-decoration: none;
    color: #005B8D;

  }
  :hover {
    .Expenditure {
      display: inline;
    }
  }
`;

const Lampbutton = styled.button`
  text-decoration: none;
  color: #005B8D;
  border-radius: 10px 10px;
  border-right: none;
  font-size: 2.2em;
  .Expenditure {
    display: none;
    text-decoration: none;
    color: #005B8D;
    font-size:0.6em;
  }
  :hover {
    .Expenditure {
      display: inline;
    }
  }
`;
