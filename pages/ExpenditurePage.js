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
  margin: 0;
  text-align: center;

  .Homebutton {
    position: absolute;
    margin: 0;
    left: 0px;
    top: 100px;
    ext-decoration: none;
    color: #214d9e;
    cursor: pointer;
    border: 1px solid;
    border-left: none;
    border-radius: 10px 10px;
    font-size: 35px;
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
