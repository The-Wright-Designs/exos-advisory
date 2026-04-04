import classNames from "classnames";
import Image from "next/image";

interface EvolvingEntrepreteurComponentProps {
  cssClasses?: string;
}

const EvolvingEntrepreteurComponent = ({
  cssClasses,
}: EvolvingEntrepreteurComponentProps) => {
  return (
    <div className={classNames(cssClasses)}>
      <Image
        src="/graphics/about-page/8907f2ce0df650b1978b8f747eab9bcbac35f248.png"
        alt="Evolving entrepreneur graphic"
        width={344}
        height={344}
        className="object-contain"
      />
    </div>
  );
};

export default EvolvingEntrepreteurComponent;
