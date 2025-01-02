import { FaExclamationCircle } from "react-icons/fa";
const questions = [
  {
    quest: "Do you have any problems or worries about intimacy?",
    options: ["yes", "No"],
  },
  {
    quest: "When was the last time you thought about suicide?",
    options: [
      "Never",
      "over a year ago",
      "Over 3 months ago",
      "Over a months ago",
      "Over 2 weeks ago",
      "in the last 2 weeks",
    ],
  },
  {
    quest:
      "Are you currently experiencing anxiety, panic attacks or have any phobias?",
    options: ["yes", "No"],
    isCaution: true,
    caution:
      "Some symptoms of panic attacks including a racing heart, dizziness, or chest pains.",
  },
  {
    quest: "Are you currently taking any medication?",
    options: ["yes", "No"],
  },
  {
    quest: "Are you currently experiencing any chronic pain?",
    options: ["yes", "No"],
  },
  {
    quest: "How would you rate your current financial status?",
  },
  {
    quest:
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    options: ["Good", "Fair", "poor"],
  },
  {
    quest: "How would you rate your current sleeping habits?",
    options: ["Good", "Fair", "poor"],
  },
  {
    quest: "Which of the following resources would be useful for you?",
    checkboxOption: [
      "Support groups",
      "Therapy journal",
      "Worksheets",
      "Goal/habit tracking",
      "Educational webinars",
      "Other",
      "I don't know",
    ],
  },

  {
    quest:
      "If you identify as a Christian, which denomination best describe you?",
    options: [
      "Protestant",
      "Catholic",
      "Orthodox",
      "Anglican",
      "Presbyterian",
      "Baptist",
      "Lutheran",
      "Methodist",
      "Other",
      "Non-denominational",
      "Not sure",
      "Not a christian",
    ],
  },
  {
    quest:
      "In order to give your therapist the right expectations, please answer a few questions about your spiritual background. How long has your faith been important to you?",
    options: [
      "Less than a year",
      "1-3 years",
      "More than 3 years",
      "My whole life",
    ],
  },
  {
    quest: "Which best describes your prayer life?",
    options: [
      "I never pray",
      "I occasionally pray",
      "I pray daily",
      "I pray throughout my day",
    ],
  },
  {
    quest: "Which best describes the nature of the therapy you are seeking?",
    options: [
      "Mental health therapy from a Christian perspective",
      "Spiritual therapy on primarily faith-based matters",
      "Holistic therapy addressing both psychological and spiritual components",
      "Other",
    ],
  },
  {
    quest:
      "What are your preferences around the spiritual component of your therapy (check all that apply):",
    checkboxOption: [
      " I would prefer to keep our session strictly clinical",
      "I would welcome any biblical wisdom",
      "I would be open to my therapist recommending spiritual disciplines",
      "I would be interested in my therapist incorporating prayer into our sessions",
    ],
  },
  {
    quest: "How do you prefer to communicate with your therapist?",
    options: [
      "Mostly via messaging",
      "Mostly via phone or video sessions",
      "Not sure yet (decide later)",
    ],
  },
  {
    quest: "Are there any specific preference for your therapist?",
    options: [
      "Male therapist",
      "female therapist",
      "Christian-based therapist",
      "Older therapist (45+)",
      "Non-religious therapist",
    ],
  },
  {
    quest: "Please mark all that apply",
    checkboxOption: [
      "I’m a student",
      "I’m a veteran",
      "I’m disabled",
      "I’m unemployed",
      "I’m employed but my income is low",
    ],
  },
];

function ClientQuestionnair4() {
  return (
    <section>
      <div>
        {questions.map((value, index) => (
          <div key={index}>
            <h5>{value.quest}</h5>

            {value.options && (
              <div>
                {value.options.map((option, index) => (
                  <div key={index}>
                    <button>{option}</button>
                  </div>
                ))}

                {value.isCaution && (
                  <div>
                    <FaExclamationCircle />
                    <p>
                      Some symptoms of panic attacks including a racing heart,
                      dizziness, or chest pains.
                    </p>
                  </div>
                )}
              </div>
            )}

            {value.checkboxOption && (
              <div>
                {value.checkboxOption.map((option, index) => (
                  <div key={index}>
                    <div className="flex gap-3">
                      <input type="checkbox" />
                      <p>{option}</p>
                    </div>
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

export default ClientQuestionnair4;
