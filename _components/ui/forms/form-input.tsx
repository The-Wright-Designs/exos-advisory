import classNames from "classnames";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  cssClasses?: string;
}

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
  defaultValue,
  cssClasses,
}: FormInputProps) => {
  return (
    <div className={classNames("flex flex-col gap-[12px]", cssClasses)}>
      <label htmlFor={name} className="text-[18px] font-extralight text-charcoal">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className="bg-white border border-[rgba(45,44,51,0.2)] p-[12px] rounded-[6px] placeholder:text-slate/50"
      />
    </div>
  );
};

export default FormInput;
