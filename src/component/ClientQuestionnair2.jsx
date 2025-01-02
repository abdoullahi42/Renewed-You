import { FaExclamationCircle } from "react-icons/fa";
const questions = [
  {
    quest: "What is your relationship status?",
    option: [
      "Single",
      "In a relationship",
      "Married",
      "Divorced",
      "Widowed",
      "Other",
    ],
  },
  {
    quest: "How important is religion in your life?",
    option: [
      "Very important",
      "Important",
      "Somewhat important",
      "Not important at all",
    ],
  },
  {
    quest: "Which religion do you identify with?",
    option: [
      "Christianity",
      "Islam",
      "Judaism",
      "Hinduism",
      "Buddhism",
      "Other",
      "Prefer not to say",
    ],
  },
  {
    quest: "Do you consider yourself to be spiritual?",
    option: ["yes", "No"],
  },
  {
    quest: "Have you ever been in a therapy before?",
    option: ["yes", "No"],
  },
  {
    quest: "What led you to consider therapy today?",
    inputType: "checkbox",
    checkboxOption: [
      "I’ve been feeling depressed",
      "I feel anxious or overwhelmed",
      "My mood is interfering with my job/school performance",
      "I struggle with building or maintaining relationships",
      "I can’t find purpose and meaning in my life",
      "I am grieving",
      "I have experienced trauma",
      "I need to talk through a specific challenge",
      "I want to gain self confidence",
      "I want to improve myself but I don’t know where to start",
      "Recommended to me (friend, family, doctor)",
      "Just exploring",
      "other",
    ],
  },
  {
    quest: "What are your expectations from your therapist? A therapist who...",
    checkboxOption: [
      "Listens",
      "Explores my past",
      "Teaches me new skills",
      "Challenges my beliefs",
      "Assigns me homework",
      "Guides me to set goals",
      "Proactively checks in with me",
      "Other",
      "I don’t know",
    ],
    inputType: "box",
  },
  {
    quest: "How would you rate your current physical health?",
    option: ["Good", "Fair", "Poor"],
  },
  {
    quest: "How would you rate your current eating habits?",
    option: ["Good", "Fair", "Poor"],
  },
];

function ClientQuestionnair2() {
  return (
    <section>
      <div>
        {questions.map((value, index) => (
          <div key={index}>
            <h5>{value.quest}</h5>

            {value.option &&
              value.option.map((option, index) => (
                <div key={index}>
                  <button>{option}</button>
                </div>
              ))}

            {value.inputType === "checkbox" && (
              <div>
                {value.checkboxOption.map((option, index) => (
                  <div key={index} className="flex gap-3">
                    <input type="checkbox" />
                    <p>{option}</p>
                  </div>
                ))}

                <button>Next</button>
                <div className="flex items-center">
                  <FaExclamationCircle />
                  <p>
                    This is a preliminary question to understand what you are
                    going through, you will have more opportunities to explain
                    or elaborate on your feelings and challenges later on.
                  </p>
                </div>
              </div>
            )}

            {value.inputType === "box" && (
              <div>
                {value.checkboxOption.map((option, index) => (
                  <div key={index} className="flex gap-3">
                    <input type="checkbox" />
                    <p>{option}</p>
                  </div>
                ))}
                <button>Next</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientQuestionnair2;
