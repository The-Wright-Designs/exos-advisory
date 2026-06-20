"use client";

import { useState } from "react";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
  cssClasses?: string;
}

const FormSelect = ({
  label,
  name,
  options,
  required,
  defaultValue = "",
  cssClasses,
}: FormSelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={classNames("flex flex-col gap-[12px]", cssClasses)}>
      <label htmlFor={name} className="text-[18px] font-extralight text-charcoal">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className={classNames(
            "appearance-none w-full bg-white border border-[rgba(45,44,51,0.2)] p-[12px] pr-[40px] rounded-[6px] desktop:hover:cursor-pointer",
            value === "" ? "text-charcoal/25" : "text-charcoal",
          )}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          color="#1A1B1C"
          size={20}
          className={classNames(
            "absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200",
            { "rotate-180": open },
          )}
        />
      </div>
    </div>
  );
};

export default FormSelect;
