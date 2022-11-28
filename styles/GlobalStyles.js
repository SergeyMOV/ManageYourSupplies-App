import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    * {
        box-sizing: border-box;
    }
    .HD{
    border: 1px solid;
    text-align:center;
    }
    .PRG{
     width:320px;
     height:223px;
    }
    .progressmain{
    position:absolute;
    left:50%;
    right:50%;
    transform:rotate(-90deg);
    width:322px;
    height:600px;
    }
    .MoneyInput{
    width:150px;
    height:30px;
    }
    .MoneyInpbt{
    height:30px;
    }
    .EuroSymb{
     position:absolute;
     font-size:16px;
     top:87px;
     left:34px;
    }
    .Procentage{
    transform:rotate(90deg);
    text-align:right;
    margin:0;
    padding-right:40px;
    }
    .Procentage2{
        transform:rotate(90deg);
        text-align:right;
        margin:0;
        padding-right:0px;
        }
`;

export default GlobalStyles;
