import "./About.css";

function About() {
  return (
    <div className="about-container">
      <img src="/author.jpg" alt="author" />
      <p>
        Hello my name is{" "}
        <span style={{ color: "#a3d8ff" }}>Fedry Alvindra</span> and i'm the CEO
        of <span style={{ color: "#a3d8ff" }}>FECODING QUIZ</span>,{" "}
        <span style={{ color: "#a3d8ff" }}>FECODING</span> is website that can
        test your knowledge about programming, you can test your knowledge based
        on the level you chose. I made this quiz using{" "}
        <span style={{ color: "#a3d8ff" }}>React.js</span> and{" "}
        <span style={{ color: "#a3d8ff" }}>useReduce hook</span> for the state
        management
      </p>
    </div>
  );
}

export default About;
