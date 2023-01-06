import React, {useState} from "react";
import styled from "styled-components";
import {RiAddBoxFill} from "react-icons/ri";

export default function AddGoals({Addgoal}) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    Addgoal(value);
    setValue("");
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Goalsinput
          type="text"
          placeholder="Type your planned Goals"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />

        <Addbutton>
          <Addicon />
        </Addbutton>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
`;
const Goalsinput = styled.input`
  width: 50%;
  font-size: 0.9em;
  background-color: #e8f0ff;
  border: none;
  :focus {
    outline: none;
    border: 2px solid #4f65ff;
  }
`;
const Addbutton = styled.button`
  padding: 0;
  margin-left: -0.3em;
  display: flex;
  align-items: center;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  height: 1.8em;
  border: none;
  :focus {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    transition: box-shadow 0.1s, transform 0.1s;
  }
  :active {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    transform: translateY(2px);
  }
`;

const Addicon = styled(RiAddBoxFill)`
font-size:1.9em;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  text-decoration: none;
  border: none
  border-radius: 6px;
  font-family: "JetBrains Mono",monospace;
  :focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transition: box-shadow .10s,transform .10s;
  }
  :active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
