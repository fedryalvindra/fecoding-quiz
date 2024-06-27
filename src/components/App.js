import QuizDetail from "./3-quiz-detail-page/QuizDetail";
import InputName from "./2-fill-name-page/InputName";
import Header from "./1-landing-page/Header";
import QuizCards from "./1-landing-page/QuizCards";
import MenuBar from "./menu-bar/MenuBar";
import Layout from "./Layout";
import Footer from "./Footer/Footer";
import Question from "./4-question-page/Question";
import Score from "./5-score-page/Score";
import CertificatePage from "./6-certificate-page/CertificatePage";
import About from "./7-about-page/About";
import { useQuiz } from "../context/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="App">
      <MenuBar />
      {status === "landingPage" && (
        <Layout nameClass={"landing-page"}>
          <Header />
          <QuizCards />
        </Layout>
      )}
      {status === "fillNamePage" && (
        <Layout nameClass={"fill-name"}>
          <InputName />
        </Layout>
      )}
      {status === "quizDetailPage" && (
        <Layout nameClass={"quiz-detail"}>
          <QuizDetail />
        </Layout>
      )}
      {status === "questionPage" && (
        <Layout nameClass={"question-page"}>
          <Question />
        </Layout>
      )}
      {status === "scorePage" && (
        <Layout nameClass={"score-page"}>
          <Score />
        </Layout>
      )}
      {status === "certificatePage" && (
        <Layout nameClass={"certificate-page"}>
          <CertificatePage />
        </Layout>
      )}
      {status === "aboutPage" && (
        <Layout nameClass={"about-page"}>
          <About />
        </Layout>
      )}
      <Footer />
    </div>
  );
}

export default App;
