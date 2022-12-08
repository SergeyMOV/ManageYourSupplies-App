import styled from "styled-components";
import {AiTwotoneHome} from "react-icons/ai";
import Link from "next/link";

export default function Expenditure() {
  return (
    <Header1>
      <Link className="Homebutton" href="/">
        <AiTwotoneHome />
      </Link>
      Detailed Expenditure
    </Header1>
  );
}
const Header1 = styled.h1`
  border: 1px solid;
  text-align: center;
  .Homebutton {
    position: absolute;
    left: 0;
    top:2.5em;
    ext-decoration: none;
    color: #214d9e;
    cursor: pointer;
    border: 1px solid;
    border-left: none;
    border-radius: 10px 10px;
    font-size: 1.2em;
    transition: 1s;
    :visited {
      color: #214d9e;
      transition: 1s;
    }
    :focus {
      color: #ffc25f;
      padding-right: 7px;
    }
  }
`;
