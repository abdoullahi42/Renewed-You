/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Faqs() {
  // const [selectId, setSelectId] = useState(null);

  // const handleClick = (id) => {
  //   setSelectId(() => (id === selectId ? null : id));
  // };

  const [openQuestions, setOpenQuestions] = useState([]);

  const handleClicks = (id) => {
    setOpenQuestions((prevOpenQuestions) =>
      prevOpenQuestions.includes(id)
        ? prevOpenQuestions.filter((questionId) => questionId !== id)
        : [...prevOpenQuestions, id]
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:mx-auto  lg:w-[80%] lg:px-8 px-5">
        {questions.map((question) => (
          <div key={question.id} className=" ">
            <div className="border-b border-solid border-[#c3c8c1]]  mt-10 ">
              <div
                onClick={() => handleClicks(question.id)}
                className="flex  justify-between "
              >
                <h3
                  className={`${
                    openQuestions.includes(question.id) ? "  pt-2 " : "pb-2"
                  } xl:text-left`}
                >
                  {question.question}
                </h3>
                <p
                  className={`${
                    openQuestions.includes(question.id) ? "pt-4" : ""
                  }`}
                >
                  {openQuestions.includes(question.id) ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </p>
              </div>
              <p className="py-2 text-[#087f5b] ">
                {openQuestions.includes(question.id) && question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;

{
  /* // {questions.map((question) => (
      //   <div key={question.id} className="mb-12">
      //     <div
      //       onClick={() => handleClick(question.id)}
      //       className="flex gap-7 bg-slate-400"
      //     >
      //       <h3>{question.question}</h3>
      //       <p>{question.id === selectId ? <FaMinus /> : <FaPlus />}</p>
      //     </div>
      //     <p>{question.id === selectId && question.answer}</p>
      //   </div>
      // ))}*/
}
