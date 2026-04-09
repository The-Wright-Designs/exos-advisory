"use client";

import { useState } from "react";
import classNames from "classnames";

interface FormCheckboxesProps {
  label: string;
  name: string;
  options: string[];
  maxSelections?: number;
  defaultSelected?: string[];
  cssClasses?: string;
}

const FormCheckboxes = ({
  label,
  name,
  options,
  maxSelections,
  defaultSelected = [],
  cssClasses,
}: FormCheckboxesProps) => {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const handleToggle = (option: string) => {
    setSelected((prev) => {
      if (prev.includes(option)) {
        return prev.filter((v) => v !== option);
      }
      if (maxSelections && prev.length >= maxSelections) {
        return prev;
      }
      return [...prev, option];
    });
  };

  const limitReached = !!maxSelections && selected.length >= maxSelections;

  return (
    <div className={classNames("flex flex-col gap-[12px]", cssClasses)}>
      <p className="text-[18px] font-extralight text-white">{label}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          const isDisabled = limitReached && !isSelected;

          return (
            <label
              key={option}
              className={classNames(
                "flex items-center gap-3 p-[12px] rounded-[6px] border transition-colors duration-200",
                isSelected
                  ? "border-citrine bg-citrine/10"
                  : "border-[rgba(45,44,51,0.2)] bg-white/5",
                isDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "desktop:hover:cursor-pointer"
              )}
            >
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={isSelected}
                disabled={isDisabled}
                onChange={() => handleToggle(option)}
                className="hidden"
              />
              <span
                className={classNames(
                  "w-5 h-5 rounded-[3px] border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                  isSelected
                    ? "bg-citrine border-citrine"
                    : "border-mist"
                )}
              >
                {isSelected && (
                  <span className="text-charcoal text-[11px] font-bold">
                    ✓
                  </span>
                )}
              </span>
              <span className="text-white text-[16px] font-light">
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FormCheckboxes;
