import BubbleComponent from "@/_components/ui/staircase/bubble-component";
import SingleStairComponent from "@/_components/ui/staircase/single-stair-component";

import staircaseData from "@/_data/general-data.json";
import classNames from "classnames";

const {
  homePage: {
    theHiddenCost: { staircase },
  },
} = staircaseData;

const StaircaseComponent = () => {
  return (
    <div className="grid grid-cols-3 max-w-[332px]">
      {staircase.map(({ title, bubble }, index) => (
        <div
          key={index}
          className={classNames("relative", {
            "col-span-3 place-items-start": (index + 1) % 5 === 0,
            "col-span-3 place-items-center": index % 2 !== 0,
            "col-span-3 place-items-end": index % 2 === 0 && index !== 0,
          })}
        >
          <SingleStairComponent
            stairNumber={(index + 1).toString()}
            slateBorder={Math.floor(index / 2) % 2 !== 0}
            toLeft={Math.floor(index / 2) % 2 !== 0}
            hasTail={[1, 3, 5].includes(index)}
          >
            {title}
          </SingleStairComponent>
          {bubble && (
            <BubbleComponent
              cssClasses={classNames("absolute", {
                "right-8 -top-20 max-w-20": index === 1,
                "right-3 -top-17 max-w-[103px]": index === 5,
                "left-3 -top-12 max-w-[88px]": index === 3,
                "left-0 -top-12 max-w-[102px]": index === 7,
              })}
              backgroundSlate={Math.floor(index / 2) % 2 !== 0}
              slateArrow={Math.floor(index / 2) % 2 === 0}
              index={index}
            >
              {bubble}
            </BubbleComponent>
          )}
        </div>
      ))}
    </div>
  );
};

export default StaircaseComponent;
