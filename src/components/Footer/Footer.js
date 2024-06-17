import "./Footer.css";
import InstaLogo from "./Insta-logo.png"

function Footer() {
  return (
    <footer>
      <div className="insta">
        <img src={InstaLogo} alt="@fed7.77" />
        <p>@fed7.77</p>
      </div>
      <p>By Fedry Alvindra</p>
    </footer>
  );
}

export default Footer;
