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
          placeholder="Manually"
          onChange={event => setManuelAmount(event.target.value)}
        />
        <button
          onClick={() => {
            setChange(change - manuelamount);
            setSavedChanges(savedChanges - manuelamount);
          }}
        >
          <AiFillMinusCircle fontSize="1.3em" />
        </button>
        <button
          onClick={() => {
            setChange(change + +manuelamount);
            setSavedChanges(savedChanges + +manuelamount);
          }}
        >
          <RiAddCircleFill fontSize="1.3em" />
        </button>
      </Manuelmain>
    </Buttonsection>
  );
}

const Buttonsection = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  height: 9.9em;
  justify-content: center;
  button {
    width: 100%;
  }
  input {
    width: 5em;
  }
`;

const Manuelmain = styled.div`
  display: flex;
  z-index: 1;

  button {
    background: none;
    border-radius: 5px 5px 5px 5px;

    padding: 0;
  }
`;
