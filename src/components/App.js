import { useReducer } from "react";
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

const initialState = {
  status: "landingPage",
  selectedQuiz: null,
  hoverQuiz: null,
  name: "",
  noQuestion: 0,
  curAnswer: [],
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "selectQuiz":
      return {
        ...state,
        selectedQuiz: action.payload,
        status: "fillNamePage",
        hoverQuiz: null,
      };
    case "hoverQuiz":
      return { ...state, hoverQuiz: action.payload };
    case "unHoverQuiz":
      return { ...state, hoverQuiz: null };
    case "addName":
      return {
        ...state,
        name: action.payload.length <= 20 ? action.payload : state.name,
      };
    case "backToLandingPage":
      return { ...initialState };
    case "quizDetailPage":
      return { ...state, status: "quizDetailPage" };
    case "backToFillNamePage":
      return { ...state, status: "fillNamePage", name: "" };
    case "startQuiz":
      return { ...state, status: "questionPage" };
    case "changeQuestion":
      return { ...state, noQuestion: action.payload - 1 };
    case "clickAnswer":
      const existingAnswerIndex = state.curAnswer.findIndex(
        (answer) => answer.quizID === action.payload.quizID
      );
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = state.curAnswer.map((answer, index) =>
          index === existingAnswerIndex
            ? {
                ...answer,
                answer: action.payload.answer,
                selectedOption: action.payload.selectedOption,
              }
            : answer
        );
        return {
          ...state,
          curAnswer: updatedAnswers,
        };
      } else {
        return {
          ...state,
          curAnswer: [...state.curAnswer, action.payload],
        };
      }
    case "nextQuestion":
      return {
        ...state,
        noQuestion:
          state.noQuestion >= state.selectedQuiz.quiz.length - 1
            ? state.noQuestion
            : state.noQuestion++,
      };
    case "prevQuestion":
      return {
        ...state,
        noQuestion:
          state.noQuestion <= 0 ? state.noQuestion : state.noQuestion--,
      };
    case "saveAnswer":
      const checkQuestion = state.selectedQuiz.quiz.map((question) =>
        question.quizID === action.payload.quizID
          ? { ...question, answered: true }
          : question
      );
      const checkAnswerIndex = state.curAnswer.findIndex(
        (answer) => answer.quizID === action.payload.quizID
      );

      return {
        ...state,
        selectedQuiz: { ...state.selectedQuiz, quiz: checkQuestion },
        score:
          state.curAnswer.at(checkAnswerIndex).answer ===
          state.selectedQuiz.quiz.at(state.noQuestion).correctAnswer
            ? state.score++
            : state.score,
        noQuestion:
          state.noQuestion >= state.selectedQuiz.quiz.length - 1
            ? state.noQuestion
            : state.noQuestion++,
      };
    case "submitQuiz":
      return { ...state, curAnswer: [], noQuestion: 0, status: "scorePage" };
    case "retryQuiz":
      const changeAnswered = state.selectedQuiz.quiz.map((answer) =>
        answer.answered ? { ...answer, answered: false } : answer
      );
      return {
        ...state,
        score: 0,
        status: "quizDetailPage",
        selectedQuiz: { ...state.selectedQuiz, quiz: changeAnswered },
      };
    case "certificatePage":
      return { ...state, status: "certificatePage" };
    case "backToScorePage":
      return { ...state, status: "scorePage" };
    case "aboutPage":
      return { ...state, status: "aboutPage" };
    default:
      throw new Error("Action not found");
  }
}

function App() {
  const [
    { status, selectedQuiz, hoverQuiz, name, noQuestion, curAnswer, score },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <MenuBar dispatch={dispatch} />
      {status === "landingPage" && (
        <Layout nameClass={"landing-page"}>
          <Header />
          <QuizCards dispatch={dispatch} hoverQuiz={hoverQuiz} />
        </Layout>
      )}
      {status === "fillNamePage" && (
        <Layout nameClass={"fill-name"}>
          <InputName name={name} dispatch={dispatch} />
        </Layout>
      )}
      {status === "quizDetailPage" && (
        <Layout nameClass={"quiz-detail"}>
          <QuizDetail
            selectedQuiz={selectedQuiz}
            name={name}
            dispatch={dispatch}
          />
        </Layout>
      )}
      {status === "questionPage" && (
        <Layout nameClass={"question-page"}>
          <Question
            quiz={selectedQuiz.quiz}
            totalQuiz={selectedQuiz.quiz.length}
            question={selectedQuiz.quiz.at(noQuestion)}
            noQuestion={noQuestion}
            dispatch={dispatch}
            hoverQuiz={hoverQuiz}
            curAnswer={curAnswer}
          />
        </Layout>
      )}
      {status === "scorePage" && (
        <Layout nameClass={"score-page"}>
          <Score
            name={name}
            score={score}
            totalQuiz={selectedQuiz.quiz.length}
            dispatch={dispatch}
          />
        </Layout>
      )}
      {status === "certificatePage" && (
        <Layout nameClass={"certificate-page"}>
          <CertificatePage
            name={name}
            selectedQuiz={selectedQuiz}
            dispatch={dispatch}
          />
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
