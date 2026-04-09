import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  background?: "charcoal" | "citrine" | "mist",
  border?: "charcoal" | "citrine" | "mist",
  formButton?: boolean,
) =>
  classNames(
    "border-[3px] flex items-center min-w-[240px] text-paragraph font-semibold text-white text-center px-10 py-4 justify-center ease-in-out duration-300 rounded-md gap-2",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "hover:cursor-pointer": !(disabled || pending),
      "bg-charcoal": background === "charcoal",
      "bg-citrine": background === "citrine",
      "bg-mist !text-charcoal": background === "mist",
      "border-charcoal": border === "charcoal",
      "border-citrine": border === "citrine",
      "border-mist": border === "mist",
      "tablet:hover:bg-citrine tablet:hover:border-charcoal":
        !(disabled || pending) &&
        background === "charcoal" &&
        border === "citrine" &&
        !formButton,
      "tablet:hover:bg-charcoal tablet:hover:border-citrine":
        !(disabled || pending) &&
        background === "citrine" &&
        border === "charcoal",
      "tablet:hover:bg-charcoal tablet:hover:border-charcoal":
        !(disabled || pending) &&
        background === "citrine" &&
        border === "citrine",
      "tablet:hover:bg-charcoal tablet:hover:border-mist tablet:hover:!text-white":
        !(disabled || pending) && background === "mist" && border === "mist",
      "tablet:hover:bg-citrine":
        !(disabled || pending) &&
        background === "charcoal" &&
        border === "citrine" &&
        formButton,
    },
  );
