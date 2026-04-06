import classNames from "classnames";

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  cssClasses?: string;
}

const FormTextarea = ({
  label,
  name,
  placeholder,
  required,
  cssClasses,
}: FormTextareaProps) => {
  return (
    <div className={classNames("flex flex-col gap-[12px]", cssClasses)}>
      <label htmlFor={name} className="text-[18px] font-extralight text-white">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="bg-white border border-[rgba(45,44,51,0.2)] p-[12px] rounded-[6px] h-[157px] resize-none placeholder:text-slate/50"
      />
    </div>
  );
};

export default FormTextarea;
