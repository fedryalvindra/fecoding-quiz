import Back from "../Buttons/Back.js";
import InputNameForm from "./InputNameForm.js";
import "./style/FillNamePage.css";

function InputName() {
  return (
    <div className="fill-name-container">
      <Back page={"backToLandingPage"} />
      <div className="fill-name-content">
        <InputNameForm />
      </div>
    </div>
  );
}

export default InputName;
