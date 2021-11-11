import React, { useState } from "react";
import Preview from "../Preview/Preview";
import "./Formbuilder.scss";

export default function Formbuilder() {
  const [choice, setChoice] = useState("");
  const [question, setQuestion] = useState("");
  const [preview, setPreview] = useState([]);

  const userQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setChoice(parseFloat(event.target.id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let submittedQuestion = {
      question: { question },
      choice: { choice },
    };
    setPreview((preview) => [...preview, submittedQuestion]);
    setQuestion("");
  };

  return (
    <div className="form-builder">
      <div className="form-builder__title">
        <h1>Formbuilder</h1>
      </div>
      <div className="form-builder__container">
        <form className="form-builder__question" onSubmit={handleSubmit}>
          <label>Question:</label>
          <input type="text" value={question} onChange={userQuestion} />
          <div className="form-builder__buttons">
            <button
              className="form-builder__button"
              id="1"
              onClick={handleClick}
            >
              Short answer
            </button>
            <button
              className="form-builder__button"
              id="2"
              onClick={handleClick}
            >
              Long answer
            </button>
          </div>
          <input type="submit" value="Submit your question" />
        </form>
        {preview && <Preview preview={preview} />}
      </div>
    </div>
  );
}
