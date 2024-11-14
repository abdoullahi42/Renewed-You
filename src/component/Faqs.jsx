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
    question: "What do we",
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
    <div className="bg-[#fffcf6] py-10">
      <div>
        <h3 className="mb-16 text-3xl md:text-4xl lg:text-[40px] font-semibold text-center text-[#2D2A2A]">
          Frequently Asked Questions
        </h3>
      </div>
      <div className=" w-11/12 lg:w-10/12 mx-auto pb-20 ">
        {questions.map((question) => (
          <div key={question.id} className=" ">
            <div className="mb-3 border-[#9E9C9C] border-t-2">
              <div
                onClick={() => handleClicks(question.id)}
                className={`flex justify-between items-center py-5 px-4 md:px-8 lg:px-9 transition-all duration-300 ease-in ${
                  openQuestions.includes(question.id) ? "" : ""
                } ${question}`}
              >
                <h3
                  className={`font-medium text-xl  md:text-2xl  w-10/12 ${
                    openQuestions.includes(question.id) ? "" : ""
                  }`}
                >
                  {question.question}
                </h3>

                <p>
                  {openQuestions.includes(question.id) ? (
                    <FaMinus size={18} />
                  ) : (
                    <FaPlus size={18} />
                  )}
                </p>
              </div>
              {openQuestions.includes(question.id) && (
                <div className="border-b-2 border-[#9E9C9C]"></div>
              )}
              <div
                className={`${
                  openQuestions.includes(question.id) ? "py-7 px-6" : ""
                }`}
              >
                <p className="text-[18px] md:text-xl leading-[1.5] ">
                  {openQuestions.includes(question.id) && question.answer}
                </p>
              </div>
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
