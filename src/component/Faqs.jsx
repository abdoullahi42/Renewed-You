/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const questions = [ 
  {
    id: 3457,
    question: "Who are the therapists on Renewed-You?",
    answer: "All therapists on Renewed-You are licensed and qualified professionals specializing in individual, teen, and couples therapy.",
  },
  {
    id: 7336,
    question: "How does online therapy work?",
    answer: "Online therapy allows you to connect with a licensed therapist through secure video, phone, or chat sessions at your convenience.",
  },
  {
    id: 8832,
    question: "Can I choose my therapist?",
    answer: "Yes, you can browse through our list of therapists and select the one that best fits your needs and preferences.",
  },
  {
    id: 1297,
    question: "What types of therapy do you offer?",
    answer: "We offer therapy for individuals, teens, and couples, covering areas such as anxiety, depression, relationships, and personal growth.",
  },
  {
    id: 9103,
    question: "How do I schedule a session?",
    answer: "You can book a session based on your availability or the therapist’s schedule through our easy-to-use platform.",
  },
  {
    id: 2002,
    question: "Is online therapy effective?",
    answer: "Yes, studies have shown that online therapy is just as effective as in-person therapy for many mental health concerns.",
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
