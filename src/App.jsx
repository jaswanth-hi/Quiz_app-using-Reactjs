import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./Compoent/Start";
import Timer from "./Compoent/Timer";
import Trivia from "./Compoent/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital of Mongolia?",
      answers: [
        { text: "Ulaanbaatar", correct: true },
        { text: "Astana", correct: false },
        { text: "Tashkent", correct: false },
        { text: "Bishkek", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which element has the chemical symbol 'Fe'?",
      answers: [
        { text: "Fluorine", correct: false },
        { text: "Iron", correct: true },
        { text: "Francium", correct: false },
        { text: "Fermium", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      answers: [
        { text: "Amelia Earhart", correct: true },
        { text: "Bessie Coleman", correct: false },
        { text: "Harriet Quimby", correct: false },
        { text: "Jacqueline Cochran", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Mercury", correct: false },
      ],
    },
    {
      id: 5,
      question: "In which year did World War I begin?",
      answers: [
        { text: "1912", correct: false },
        { text: "1914", correct: true },
        { text: "1916", correct: false },
        { text: "1918", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the largest organ in the human body?",
      answers: [
        { text: "Heart", correct: false },
        { text: "Liver", correct: false },
        { text: "Skin", correct: true },
        { text: "Lungs", correct: false },
      ],
    },
    {
      id: 7,
      question: "Who wrote the play 'Hamlet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "Leo Tolstoy", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon", correct: true },
        { text: "Nile", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which famous scientist developed the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Nikola Tesla", correct: false },
        { text: "Galileo Galilei", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the most spoken language in the world?",
      answers: [
        { text: "English", correct: false },
        { text: "Mandarin Chinese", correct: true },
        { text: "Spanish", correct: false },
        { text: "Hindi", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the smallest country in the world?",
      answers: [
        { text: "Monaco", correct: false },
        { text: "Nauru", correct: false },
        { text: "Vatican City", correct: true },
        { text: "San Marino", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      id: 13,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Diamond", correct: true },
        { text: "Iron", correct: false },
        { text: "Platinum", correct: false },
      ],
    },
    {
      id: 14,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 15,
      question: "What is the main ingredient in guacamole?",
      answers: [
        { text: "Tomato", correct: false },
        { text: "Avocado", correct: true },
        { text: "Pepper", correct: false },
        { text: "Onion", correct: false },
      ],
    },
];


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
