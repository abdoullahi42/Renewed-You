import { useState } from "react";
import ClientQuestionnair2 from "../component/ClientQuestionnair2";
import ClientQuestionnair1 from "../component/ClientQuestionnair1";
import ClientQuestionnair3 from "../component/ClientQuestionnair3"
import ClientQuestionnair4 from "../component/ClientQuestionnair4"
import ClientQuestionnair5 from "../component/LastQuestionnair"

const QuestionnaireManager = () => {
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState(0);

  const handleNext = () => {
    if (currentQuestionnaire < 4) {
      setCurrentQuestionnaire(currentQuestionnaire + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionnaire > 0) {
      setCurrentQuestionnaire(currentQuestionnaire - 1);
    }
  };

  const renderQuestionnaire = () => {
    switch (currentQuestionnaire) {
      case 0:
        return <ClientQuestionnair1 onNext={handleNext} onPrevious={handlePrevious} />;
      case 1:
        return <ClientQuestionnair2 onNext={handleNext} onPrevious={handlePrevious} />;
      case 2:
        return <ClientQuestionnair3 onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <ClientQuestionnair4 onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <ClientQuestionnair5 onNext={handleNext} onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderQuestionnaire()}
    </div>
  );
};

export default QuestionnaireManager;