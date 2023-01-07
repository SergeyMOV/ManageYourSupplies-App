import styled from "styled-components";
import {HiPencil} from "react-icons/hi";
import {TiDelete} from "react-icons/ti";
import {FaSave} from "react-icons/fa";
import {useState} from "react";
export default function Goals({
  goal,
  removeGoals,
  handleEditSave,
  handleChange,
}) {
  const [inputChange, setInputChange] = useState(false);
  const [textValue, setTextValue] = useState("");
  const handleCheckboxChange = () => {
    handleChange(goal.id);
  };

  return (
    <Styleddiv key={goal.id} className="item-todo">
      <Checkbox
        type="checkbox"
        checked={goal.complete}
        onChange={() => handleCheckboxChange()}
      />
      <section className={goal.complete ? "item-text strike" : "item-text"}>
        {inputChange ? (
          <input
            type="text"
            placeholder={goal.task}
            onChange={event => setTextValue(event.target.value)}
          />
        ) : (
          <span style={goal.complete ? {textDecoration: "line-through"} : null}>
            {goal.task}
          </span>
        )}
      </section>
      <div>
        <Deletebutton
          className="item-delete"
          onClick={() => removeGoals(goal.id)}
        ></Deletebutton>
        {inputChange ? (
          <Savebutton
            onClick={() => {
              setInputChange(false);
              handleEditSave(goal.id, textValue);
            }}
          ></Savebutton>
        ) : (
          <Editbutton
            className="item-edit"
            onClick={() => setInputChange(true)}
          ></Editbutton>
        )}
      </div>
    </Styleddiv>
  );
}

const Styleddiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 10px 10px;
  align-items: center;

  button {
    border-radius: 10px 10px;
  }
`;
const Editbutton = styled(HiPencil)`
  font-size: 2em;
`;
const Deletebutton = styled(TiDelete)`
  font-size: 2em;
`;
const Savebutton = styled(FaSave)`
  font-size: 1.8em;
`;
const Checkbox = styled.input`
  height: 3em;
  width: 7%;
  margin-left: 0.5em;
`;
