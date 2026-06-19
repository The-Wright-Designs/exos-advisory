import Image from "next/image";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  sentTime: string;
  unread?: boolean;
  notDelivered?: boolean;
  containerClasses?: string;
  messageClasses?: string;
  isReply?: boolean;
  hideIcon?: boolean;
}

export default function MessageTemplate({
  children,
  sentTime,
  unread,
  notDelivered,
  containerClasses,
  messageClasses,
  isReply,
  hideIcon,
}: Props) {
  const icon = notDelivered
    ? "/icons/single-check.png"
    : unread
      ? "/icons/double-check-unread.png"
      : "/icons/double-check-read.png";

  const iconWidth = notDelivered ? 12 : 17;

  return (
    <div
      className={classNames(
        "flex",
        !isReply && "justify-end",
        containerClasses,
      )}
    >
      <div
        className={classNames(
          "relative bg-charcoal/80 rounded-bl-md rounded-br-md px-4 pt-3 pb-7 min-w-[208px]",
          isReply ? "rounded-tr-md" : "rounded-tl-md",
          messageClasses,
        )}
      >
        <div className="text-white text-[18px] font-light">{children}</div>
        <div className="absolute bottom-2 right-3 flex items-center gap-1 opacity-85">
          <span className="text-[12px] font-light text-white">{sentTime}</span>
          {!hideIcon && <Image src={icon} alt="" width={iconWidth} height={11} />}
        </div>
      </div>
    </div>
  );
}
