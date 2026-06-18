import Image from "next/image";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const TheInvestmentTrapComponent = ({ cssClasses }: Props) => {
  return (
    <div className={classNames("flex flex-col gap-10", cssClasses)}>
      <div className="grid gap-10">
        <div className="flex flex-col gap-5">
          <h4 className="text-[26px]">The investment trap</h4>
          <p>
            Entrepreneurs are well supported throughout the growth of their
            business and throughout a private equity or acquisition deal, but
            far less so during the transition that follows. Without that
            support, decisions can become reactive, investments misaligned, and
            long-term clarity begins to erode.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold">
            Starting with capital, but missing context
          </p>
          <p>
            After exit most, entrepreneurs begin with what feels most familiar:
            capital.
          </p>
        </div>
      </div>
      <div className="bg-slate border-2 border-charcoal/50 rounded-md p-7 flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px] text-white">
          <h4 className="text-[22px]">A (faulty) default starting point:</h4>
          <ul className="list-disc flex flex-col pl-7">
            <li>
              <p>
                Most entrepreneurs begin the transition on the financial side.
                It feels logical because capital is tangible, measurable, and
                familiar. But the{" "}
                <strong className="font-bold">sequence is often wrong</strong>.
              </p>
            </li>
            <li>
              <p>
                <strong className="font-bold">
                  Decisions about capital are influenced
                </strong>{" "}
                by deeper questions about{" "}
                <strong className="font-bold">identity, purpose</strong>, and
                the kind of second chapter you want to build.
              </p>
            </li>
            <li>
              <p>
                When those questions remain unresolved, capital often moves{" "}
                <strong className="font-bold">too quickly</strong> into
                opportunities that look compelling but ultimately lead in the{" "}
                <strong className="font-bold">wrong direction</strong>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheInvestmentTrapComponent;
