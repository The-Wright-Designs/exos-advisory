import Image from "next/image";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  sentTime: string;
  unread?: boolean;
  notDelivered?: boolean;
  containerClasses?: string;
  messageClasses?: string;
}

export default function MessageTemplate({
  children,
  sentTime,
  unread,
  notDelivered,
  containerClasses,
  messageClasses,
}: Props) {
  const icon = notDelivered
    ? "/icons/single-check.png"
    : unread
      ? "/icons/double-check-unread.png"
      : "/icons/double-check-read.png";

  const iconWidth = notDelivered ? 12 : 17;

  return (
    <div className={classNames("flex justify-end", containerClasses)}>
      <div
        className={classNames(
          "relative bg-charcoal/80 rounded-tl-md rounded-bl-md rounded-br-md px-3 pt-3 pb-7 min-w-[208px]",
          messageClasses,
        )}
      >
        <p className="text-white font-light">{children}</p>
        <div className="absolute bottom-2 right-3 flex items-center gap-1 opacity-85">
          <span className="text-[12px] font-light text-white">{sentTime}</span>
          <Image src={icon} alt="" width={iconWidth} height={11} />
        </div>
      </div>
    </div>
  );
}
