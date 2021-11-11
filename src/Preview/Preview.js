import "./Preview.scss";

const Preview = ({ preview }) => {
  return (
    <div className="preview">
      {preview.map((submittedQuestion) => {
        return (
          <div className="preview__answer">
            <h3>{submittedQuestion.question.question}</h3>
            {submittedQuestion.choice.choice === 1 && (
              <input type="text" placeholder="Enter a short answer" />
            )}
            {submittedQuestion.choice.choice === 2 && (
              <textarea placeholder="Enter a long answer" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
