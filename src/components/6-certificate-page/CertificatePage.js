import { useQuiz } from "../../context/QuizContext";
import Back from "../Buttons/Back";
import "./CertificatePage.css";
import Signature from "./Signature.jpg";

function CertificatePage() {
  const { name, selectedQuiz } = useQuiz();
  return (
    <div className="certificate-page-container">
      <Back page={"backToScorePage"} />
      <div className="certificate-container">
        <div className="certificate-border">
          <div className="certificate">
            <div className="logo">
              <h3>FECODING</h3>
            </div>
            <h1>CERTIFICATE OF COMPLETION</h1>
            <h2>{name}</h2>
            <div className="certificate-name">
              <p>a certificate in</p>
              <h3>{selectedQuiz.title}</h3>
            </div>
            <img src={Signature} alt="signature" />
            <p className="author">Fedry Alvindra</p>
          </div>
        </div>
        <p className="screenshoot">Screenshoot the certificate</p>
      </div>
    </div>
  );
}

export default CertificatePage;
