import { useState } from "react";
import { Steps } from "antd";

import OnBoardContextProvider from "./OnBoardContext";
import Step01 from "./onBoardingForms/Step01";
import Step02 from "./onBoardingForms/Step02";
import Step03 from "./onBoardingForms/Step03";
import OnBoardSuccess from "./onBoardingForms/OnBoardSuccess";

const { Step } = Steps;

const OnBoard = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});

  const next = () => {
    setCurrent(current + 1);
  };

  const goToStep = e => {
    const id = e.currentTarget.parentNode.dataset.id;
    setCurrent(parseInt(id));
  };

  const steps = [
    {
      title: "Step 01",
      content: (
        <Step01 goToNext={next} formData={formData} setFormData={setFormData} />
      ),
    },
    {
      title: "Step 02",
      content: (
        <Step02 formData={formData} goToNext={next} setFormData={setFormData} />
      ),
    },
    {
      title: "Step 03",
      content: (
        <Step03 formData={formData} goToNext={next} setFormData={setFormData} />
      ),
    },
    {
      title: "",
      content: <OnBoardSuccess />,
    },
  ];

  return (
    <OnBoardContextProvider>
      {current < steps.length - 1 && (
        <div className="h-12 md:h-20 bg-neutral-300 w-full" />
      )}

      {current < steps.length - 1 && (
        <Steps
          className="mx-5 md:mx-14 flex justify-between -translate-y-6 transform"
          current={current}>
          {steps.slice(0, 3).map(item => (
            <Step
              className="h-11 w-24 md:h-14 md:w-32 uppercase font-bold text-center pt-2 md:pt-4 rounded-lg bg-primary-default text-neutral-100"
              key={item.title}
              title={item.title}
              icon={<></>}
              onClick={goToStep}
            />
          ))}
        </Steps>
      )}
      <div className="mx-5 md:mx-14">{steps[current].content}</div>
    </OnBoardContextProvider>
  );
};

export default OnBoard;
