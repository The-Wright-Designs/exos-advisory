import Image from "next/image";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const TheInvestmentTrapComponent = ({ cssClasses }: Props) => {
  return (
    <div className={classNames("flex flex-col gap-10", cssClasses)}>
      <div className="grid gap-10 desktop:grid-cols-2">
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
          <h4 className="text-[26px]">
            Starting with capital, but missing context
          </h4>
          <p>
            After exit most, entrepreneurs begin with what feels most familiar:
            capital. But without first resolving questions of identity and
            direction, financial decisions can move ahead of intent, leading to
            outcomes that feel active, yet ultimately misaligned.
          </p>
        </div>
      </div>
      <div className="bg-slate border-2 border-charcoal/50 rounded-md p-7 flex flex-col gap-5 order-last">
        <div className="flex flex-col gap-3 text-white">
          <h4 className="text-[26px]">When context falls away</h4>
          <ul className="list-disc flex flex-col pl-7">
            <li>
              <p>
                While you are building a company, you operate inside structures
                for capital allocation, leadership, accountability, and
                decision-making.
              </p>
            </li>
            <li>
              <p>
                Your calendar, board, investors, and operating cadence create a
                framework that shapes how decisions are made.
              </p>
            </li>
            <li>
              <p>After exit, that operating system disappears.</p>
            </li>
          </ul>
        </div>
        <hr className="border-white/30" />
        <div className="flex flex-col gap-3 text-white">
          <h4 className="text-[26px]">A (faulty) default starting point</h4>
          <ul className="list-disc flex flex-col pl-7">
            <li>
              <p>
                Most entrepreneurs begin the transition on the financial side.
                It feels logical because capital is tangible, measurable, and
                familiar. But the sequence is often wrong.
              </p>
            </li>
            <li>
              <p>
                Decisions about capital are influenced by deeper questions about
                identity, purpose, and the kind of second chapter you want to
                build.
              </p>
            </li>
            <li>
              <p>
                When those questions remain unresolved, capital often moves too
                quickly into opportunities that look compelling but ultimately
                lead in the wrong direction.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="aspect-video relative min-[925px]:aspect-auto min-[925px]:h-[70vw] desktop:h-[780px] desktop:order-last">
        <Image
          src="/images/home-page/79735027f7a49b5ecd6a36da2ee49f0ed03c9ff0.jpg"
          alt="Exos"
          fill
          sizes="(max-width: 925px) 100vw, 85vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TheInvestmentTrapComponent;
