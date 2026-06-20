export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  cssClasses?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  background?: "charcoal" | "citrine" | "mist";
  border?: "charcoal" | "citrine" | "mist";
  target?: "_self" | "_blank";
  title?: string;
  formButton?: boolean;
}
