import styled from "styled-components";
import {GiPayMoney} from "react-icons/gi";
import {GiAchievement} from "react-icons/gi";
import {FaLightbulb} from "react-icons/fa";
import Link from 'next/link'


export default function Navmenu() {
  return (
    <Navbar>
      <li>
        <Styledbutton>
          <GiPayMoney /><Link className="Expenditure" href="/ExpenditurePage"> All Expenditures</Link>
        </Styledbutton>
      </li>
      <li>
        <Styledbutton>
          <GiAchievement /><Link className="Expenditure" href="#"> Achievements</Link>
        </Styledbutton>
      </li>
      <li>
        <Lampbutton>
          <FaLightbulb /><Link className="Expenditure" href="#">Tips & Guidance</Link>
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
    border:1px solid;
    border-radius: 10px 10px;
    border-right:none;
  }
`;
const Styledbutton = styled.button`
text-decoration:none;
    color:#214d9e;
    font-size:35px;
    border-radius:10px 10px;
    border-right:none;
    .Expenditure{
      display:none;
      font-size:20px;
      text-decoration:none;
      color:#214d9e;
     }
      :hover{
      .Expenditure{
        display:inline;
      }
     }

`;

const Lampbutton = styled.button`
  text-decoration: none;
  color: #214d9e;
  border-radius:10px 10px;
    border-right:none;
  font-size: 35px;
  .Expenditure{
    display:none;
    text-decoration:none;
      color:#214d9e;
    font-size:20px;
  }
  :hover{
  .Expenditure{
    display:inline;
  }
  }
`;
