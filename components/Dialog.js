import styled from "styled-components";

export default function Dialog({show, description, confirm, cancel}) {
  if (!show) {
    return <></>;
  }

  return (
    <>
      <Dialogmain className="dialog__footer">
        <p>{description}</p>
        <button onClick={cancel} className="dialog__cancel">
          Cancel
        </button>
        <button onClick={confirm} className="dialog__confirm">
          Yes, Reset All
        </button>
      </Dialogmain>
    </>
  );
}

const Dialogmain = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 1em;
  background: #e8f0ff;
  border-radius: 10px 10px;
  width: 60vw;
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 60%;
  }
  @media (min-width: 1024px) and (max-width: 2000px) {
    width: 23vw;
  }
  .dialog__confirm {
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
    font-size: 1em;
    border: 0;
    border-radius: 6px;
    margin-left: 0.5em;
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
  .dialog__cancel {
    background-color: #de501d;
    font-size: 1em;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    border: 0;
    border-radius: 6px;
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
`;
