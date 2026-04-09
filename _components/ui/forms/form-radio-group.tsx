"use client";

import { useState } from "react";
import classNames from "classnames";

interface FormRadioGroupProps {
  label: string;
  name: string;
  options: string[];
  onChange?: (value: string) => void;
  defaultValue?: string;
  cssClasses?: string;
}

const FormRadioGroup = ({
  label,
  name,
  options,
  onChange,
  defaultValue = "",
  cssClasses,
}: FormRadioGroupProps) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={classNames("flex flex-col gap-[12px]", cssClasses)}>
      <p className="text-[18px] font-extralight text-white">{label}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={classNames(
              "flex items-center gap-3 p-[12px] rounded-[6px] border transition-colors duration-200 desktop:hover:cursor-pointer",
              selected === option
                ? "border-citrine bg-citrine/10"
                : "border-[rgba(45,44,51,0.2)] bg-white/5"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={selected === option}
              onChange={() => handleSelect(option)}
              className="hidden"
            />
            <span
              className={classNames(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                selected === option ? "border-citrine" : "border-mist"
              )}
            >
              {selected === option && (
                <span className="w-2.5 h-2.5 rounded-full bg-citrine" />
              )}
            </span>
            <span className="text-white text-[16px] font-light">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormRadioGroup;
