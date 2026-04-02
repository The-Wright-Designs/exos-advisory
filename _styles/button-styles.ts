import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  background?: "charcoal" | "citrine",
  border?: "charcoal" | "citrine",
) =>
  classNames(
    "border-[3px] flex items-center text-paragraph font-semibold text-white text-center px-10 py-4 justify-center ease-in-out duration-300 rounded-md gap-2",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "hover:cursor-pointer": !(disabled || pending),
      "bg-charcoal": background === "charcoal",
      "bg-citrine": background === "citrine",
      "border-charcoal": border === "charcoal",
      "border-citrine": border === "citrine",
      "desktop:hover:bg-citrine desktop:hover:border-charcoal":
        !(disabled || pending) &&
        background === "charcoal" &&
        border === "citrine",
      "desktop:hover:bg-charcoal desktop:hover:border-citrine":
        !(disabled || pending) &&
        background === "citrine" &&
        border === "charcoal",
      "desktop:hover:bg-charcoal desktop:hover:border-charcoal":
        !(disabled || pending) &&
        background === "citrine" &&
        border === "citrine",
    },
  );
