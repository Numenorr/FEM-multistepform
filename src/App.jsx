import { useState } from "react";
import InfoForm from "./components/infoForm";
import PlanForm from "./components/planForm";
import AddonsForm from "./components/addonsForm";
import SummaryForm from "./components/summaryForm";
import CompletedForm from "./components/completed";
import Steps from "./components/steps";
import StepsMobile from "./components/stepsMobile";

import { useForm } from "./hooks/useForm";
import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  addons: [],
};

function App() {
  const [data, setData] = useState(formTemplate);
  const [completed, setCompleted] = useState(false);

  const updateForm = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <InfoForm
      data={data}
      updateForm={updateForm}
    />,
    <PlanForm
      data={data}
      updateForm={updateForm}
    />,
    <AddonsForm
      data={data}
      updateForm={updateForm}
    />,
    <SummaryForm />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <>
      <StepsMobile currentStep={currentStep} />
      <div className="App bg-slate-50 grid md:grid-cols-3 rounded-xl mx-4 mt-20 md:mx-auto md:h-auto absolute md:relative shadow-xl">
        <Steps currentStep={currentStep} />
        {!completed ? (
          <form
            className="py-6 col-span-2"
            onSubmit={(e) => changeStep(currentStep + 1, e)}
          >
            <div>{currentComponent}</div>
            <div className="flex justify-around">
              {!isFirstStep && (
                <button
                  type="button"
                  className=" text-gray-400 py-3 px-6 rounded-lg font-bold text-sm hover:text-Marineblue"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  Go Back
                </button>
              )}
              {!isLastStep ? (
                <button
                  type="submit"
                  className="bg-Marineblue text-gray-200 py-3 px-6 rounded-lg font-bold text-sm hover:opacity-95"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-Purplishblue text-gray-200 py-3 px-6 rounded-lg font-bold text-sm hover:opacity-95"
                  onClick={() => setCompleted(true)}
                >
                  Confirm
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="grid place-content-center col-span-2">
            <CompletedForm />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
