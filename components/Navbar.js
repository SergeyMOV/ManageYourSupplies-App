import styled from "styled-components";
import {GiAchievement} from "react-icons/gi";
import Link from "next/link";
import React, {useState} from "react";

export default function Navmenu() {
  const [toogle, setToogle] = useState(true);

  const showclick = () => {
    setToogle(!toogle);
  };

  return (
    <Navbar>
      <li>
        <Styledbutton onClick={showclick}>
          <GiAchievement />
          {toogle ? (
            <Link style={{display: "none"}} className="Achievement" href="#">
              Goals & Achievements
            </Link>
          ) : !toogle ? (
            <Link
              style={{display: "inline"}}
              className="Achievement"
              href="/AchievementsPage"
            >
              Goals & Achievements
            </Link>
          ) : (
            ""
          )}
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
  }
`;
const Styledbutton = styled.button`
  text-decoration: none;
  color: #d0d6d0;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  font-size: 2.2em;
  border-radius: 20px 20px;

  .Achievement {
    display: none;
    font-size: 0.6em;
    text-decoration: none;
    color: black;
  }
`;
