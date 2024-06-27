import Option from "./Option";

function OptionList({ question }) {
  return (
    <ul className="option">
      {question.option.map((option, i) => (
        <Option key={option} option={option} i={i} question={question} />
      ))}
    </ul>
  );
}

export default OptionList;
