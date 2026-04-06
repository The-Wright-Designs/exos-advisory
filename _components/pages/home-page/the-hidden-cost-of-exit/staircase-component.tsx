import classNames from "classnames";
import BubbleComponent from "@/_components/ui/staircase/bubble-component";
import InfoCardComponent from "@/_components/ui/staircase/info-card-component";
import ReverseTriangleLine from "@/_components/ui/staircase/reverse-triangle-line";
import SingleStairComponent from "@/_components/ui/staircase/single-stair-component";

import staircaseData from "@/_data/general-data.json";

const {
  homePage: {
    theHiddenCost: { staircase, infoCards },
  },
} = staircaseData;

const StaircaseComponent = () => {
  return (
    <div className="min-w-[244px] max-w-[244px] min-[388px]:max-w-[332px]">
      <div className="grid grid-cols-3">
        {staircase.map(({ title, bubble }, index) => (
          <div
            key={index}
            className={classNames("relative", {
              "col-span-3 justify-self-start": (index + 1) % 5 === 0,
              "col-span-3 justify-self-center": index % 2 !== 0,
              "col-span-3 justify-self-end": index % 2 === 0 && index !== 0,
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
                cssClasses={classNames("absolute hidden min-[388px]:block", {
                  "-right-18 -top-20 max-w-20": index === 1,
                  "-right-24 -top-17 max-w-[103px]": index === 5,
                  "-left-25 -top-12 max-w-[88px]": index === 3,
                  "-left-26 -top-12 max-w-[102px]": index === 7,
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
      <div className="relative flex flex-col pt-[100px]">
        <ReverseTriangleLine cssClasses="absolute top-0 left-[74px] min-[388px]:left-[103px]" />
        {infoCards.map(({ percentage, paragraph }, index) => (
          <div key={index}>
            <InfoCardComponent
              percentage={percentage}
              percentagePositionRight={index % 2 !== 0}
              cssClasses={classNames({
                "self-start": index === 0,
                "self-end": index === 1,
                "self-center": index === 2,
              })}
              orangeBackground={index === 0 || index === 3}
              charcoalBackground={index === 2}
              mistBackground={index === 1}
            >
              {paragraph}
            </InfoCardComponent>
            {index < infoCards.length - 1 && <ReverseTriangleLine />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaircaseComponent;
