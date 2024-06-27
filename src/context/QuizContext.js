import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

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

function QuizProvider({ children }) {
  const [
    { status, selectedQuiz, hoverQuiz, name, noQuestion, curAnswer, score },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalQuiz = selectedQuiz?.quiz?.length;

  return (
    <QuizContext.Provider
      value={{
        status,
        selectedQuiz,
        hoverQuiz,
        name,
        noQuestion,
        curAnswer,
        score,
        totalQuiz,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
