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
  const [selectId, setSelectId] = useState(null);

  const handleClick = (id) => {
    setSelectId(() => (id === selectId ? null : id));
  };

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
      {questions.map((question) => (
        <div key={question.id} className="mb-12">
          <div
            onClick={() => handleClick(question.id)}
            className="flex gap-7 bg-slate-400"
          >
            <h3>{question.question}</h3>
            <p>{question.id === selectId ? <FaMinus /> : <FaPlus />}</p>
          </div>
          <p>{question.id === selectId && question.answer}</p>
        </div>
      ))}

      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <div
              onClick={() => handleClicks(question.id)}
              className="flex gap-7 bg-slate-400"
            >
              <h3>{question.question}</h3>
              <p>
                {openQuestions.includes(question.id) ? <FaMinus /> : <FaPlus />}
              </p>
            </div>
            <p>{openQuestions.includes(question.id) && question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;

// function Faqs() {
//   return (
//     <div className="max-w-screen-xl mx-auto px-7 bg-white min-h-sceen">
//       <div className="flex flex-col items-center">
//         <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
//         <p className="text-neutral-500 text-xl mt-3">
//           Frequenty asked questions
//         </p>
//       </div>
//       <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto md:justify-start  mt-8 md:mx-36 ">
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span className="font-abdu"> What is a SAAS platform?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               SAAS platform is a cloud-based software service that allows users
//               to access and use a variety of tools and functionality.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> How does billing work?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               We offers a variety of billing options, including monthly and
//               annual subscription plans, as well as pay-as-you-go pricing for
//               certain services. Payment is typically made through a credit card
//               or other secure online payment method.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> Can I get a refund for my subscription?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               We offers a 30-day money-back guarantee for most of its
//               subscription plans. If you are not satisfied with your
//               subscription within the first 30 days, you can request a full
//               refund. Refunds for subscriptions that have been active for longer
//               than 30 days may be considered on a case-by-case basis.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> How do I cancel my subscription?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               To cancel your We subscription, you can log in to your account and
//               navigate to the subscription management page. From there, you
//               should be able to cancel your subscription and stop future
//               billing.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> Can I try this platform for free?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               We offers a free trial of its platform for a limited time. During
//               the trial period, you will have access to a limited set of
//               features and functionality, but you will not be charged.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> How do I access documentation?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               Documentation is available on the company's website and can be
//               accessed by logging in to your account. The documentation provides
//               detailed information on how to use the , as well as code examples
//               and other resources.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> How do I contact support?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               If you need help with the platform or have any other questions,
//               you can contact the company's support team by submitting a support
//               request through the website or by emailing support@We.com.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> Do you offer any discounts or promotions?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               We may offer discounts or promotions from time to time. To stay
//               up-to-date on the latest deals and special offers, you can sign up
//               for the company's newsletter or follow it on social media.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
//               <span> How do we compare to other similar services?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg
//                   fill="none"
//                   height="24"
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   viewBox="0 0 24 24"
//                   width="24"
//                 >
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </summary>
//             <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//               This platform is a highly reliable and feature-rich service that
//               offers a wide range of tools and functionality. It is
//               competitively priced and offers a variety of billing options to
//               suit different needs and budgets.
//             </p>
//           </details>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Faqs;
