"use client";

import { useFormStatus } from "react-dom";
import { ButtonProps } from "@/_types/button-types";
import { buttonStyles } from "@/_styles/button-styles";

const ButtonType = ({
  children,
  onClick,
  cssClasses,
  type = "submit",
  disabled = false,
  background,
  border,
  ariaLabel,
  title,
  formButton,
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={buttonStyles(
        cssClasses,
        disabled,
        pending,
        background,
        border,
        formButton,
      )}
      disabled={disabled || pending}
      title={title}
    >
      {pending && type === "submit" ? (
        <div className="flex items-center justify-center py-0.5">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {children}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden min-[375px]:block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L11.7071 11.2929C12.0976 11.6834 12.0976 12.3166 11.7071 12.7071L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071C4.90237 17.3166 4.90237 16.6834 5.29289 16.2929L9.58579 12L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929L16.5858 12L12.2929 7.70711C11.9024 7.31658 11.9024 6.68342 12.2929 6.29289Z"
              fill="#FBFBFB"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default ButtonType;
