import classNames from "classnames";
import InfoCardComponent from "@/_components/ui/staircase/info-card-component";
import ReverseTriangleLine from "@/_components/ui/staircase/reverse-triangle-line";

import staircaseData from "@/_data/general-data.json";

const {
  homePage: {
    theHiddenCost: { infoCards },
  },
} = staircaseData;

interface Props {
  cssClasses?: string;
}

const InfoCardsComponent = ({ cssClasses }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col desktop:flex-row desktop:items-stretch desktop:gap-6",
        cssClasses,
      )}
    >
      {infoCards.map(({ percentage, paragraph }, index) => (
        <div
          key={index}
          className="flex flex-col desktop:flex-row desktop:flex-1 desktop:items-center"
        >
          <InfoCardComponent
            percentage={percentage}
            percentagePositionRight={index % 2 !== 0}
            cssClasses={classNames("desktop:h-full", {
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
          {index < infoCards.length - 1 && (
            <ReverseTriangleLine cssClasses="desktop:rotate-270 desktop:h-10 desktop:shrink-0 desktop:translate-x-3" />
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoCardsComponent;
