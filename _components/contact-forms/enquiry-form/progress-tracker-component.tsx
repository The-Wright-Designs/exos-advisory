"use client";

import classNames from "classnames";

interface Props {
  currentStep: number;
  totalSteps: number;
  cssClasses?: string;
}

const ProgressTrackerComponent = ({
  currentStep,
  totalSteps,
  cssClasses,
}: Props) => {
  return (
    <div
      className={classNames(
        "relative flex items-center justify-between desktop:flex-col desktop:min-h-[280px] desktop:max-h-[340px]",
        cssClasses,
      )}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-[14px] right-[14px] h-[2px] bg-citrine z-0 desktop:top-0 desktop:left-3 desktop:translate-y-0 desktop:h-full desktop:w-[2px]" />
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={classNames(
            "w-7 h-7 rounded-full flex items-center justify-center text-[12px] relative z-10",
            {
              "bg-citrine text-white font-bold": step < currentStep,
              "bg-mist text-charcoal border border-citrine":
                step === currentStep,
              "bg-charcoal text-white/75 border border-citrine":
                step > currentStep,
            },
          )}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressTrackerComponent;
