import styled from "styled-components";
import React, {useState} from "react";
import {RiAddCircleFill} from "react-icons/ri";
import {AiFillMinusCircle} from "react-icons/ai";

export default function InOutputFields({
  change,
  setChange,
  savedChanges,
  setSavedChanges,
}) {
  const [manuelamount, setManuelAmount] = useState(0);
  return (
    <Buttonsection>
      <button
        onClick={() => {
          setChange(change + 50);
          setSavedChanges(savedChanges + 50);
        }}
      >
        +50€
      </button>
      <button
        onClick={() => {
          setChange(change - 50);
          setSavedChanges(savedChanges - 50);
        }}
      >
        -50€
      </button>
      <button
        onClick={() => {
          setChange(change + 100);
          setSavedChanges(savedChanges + 100);
        }}
      >
        +100€
      </button>
      <button
        onClick={() => {
          setChange(change - 100);
          setSavedChanges(savedChanges - 100);
        }}
      >
        -100€
      </button>
      <Manuelmain>
        <input
          type="number"
          placeholder="Manually"
          onChange={event => setManuelAmount(Number(event.target.value))}
        />

        <button
          onClick={() => {
            setChange(change - manuelamount);
            setSavedChanges(savedChanges - manuelamount);
          }}
        >
          <AiFillMinusCircle fontSize="1.7em" color="#DE501D" />
        </button>
        <button
          onClick={() => {
            setChange(change + manuelamount);
            setSavedChanges(savedChanges + manuelamount);
          }}
        >
          <RiAddCircleFill fontSize="1.7em" color="#1128A8" />
        </button>
      </Manuelmain>
    </Buttonsection>
  );
}

const Buttonsection = styled.section`
  width: 15%;
  display: flex;
  flex-direction: column;
  height: 8em;
  justify-content: center;
  button {
    width: 4.8em;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #5adaff 0,
      #5468ff 100%
    );
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    text-decoration: none;
    border: 0;
    border-radius: 6px;
    margin-top: 1em;
    font-family: "JetBrains Mono", monospace;
    :focus {
      border: none;
      outline: none;
      box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
      transition: box-shadow 0.1s, transform 0.1s;
    }
    :active {
      border: none;
      outline: none;
      box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
    }
  }
  input {
    width: 4.6em;
    border: none;
    background-color: #e8f0ff;
    border-radius: 8px 8px;
    margin-top: 1em;
  }
`;

const Manuelmain = styled.section`
  display: flex;
  z-index: 1;
  button {
    background: none;
    border-radius: 5px 5px 5px 5px;
    padding: 0;
    width: 2.3em;
    margin-top: 1em;
  }
`;
