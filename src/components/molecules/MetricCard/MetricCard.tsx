import Link from "next/link";
import Image from "next/image";

interface MetricCardProps {
  href?: string;
  caption: string;
  timeFrame?: string;
  mainIcon: string;
  trendingIcon: string;
  value: string | number;
  percentage?: string | number;
}

const MetricCard = ({
  href,
  caption,
  timeFrame,
  mainIcon,
  trendingIcon,
  value,
  percentage,
}: MetricCardProps) => {
  const element = (
    <div
      className={`w-fit min-w-[255px] border-1 border-[#B8B9B8] rounded-lg p-4 bg-white ${
        href && "hover:shadow transition-all duration-300 cursor-pointer"
      }`}
    >
      <Image
        src={mainIcon}
        alt="menu"
        width={28}
        height={28}
        className="object-contain w-8 h-8 max-sm:w-6 max-sm:h-6"
      />
      <div className="flex justify-between items-center w-full mt-3">
        <div className="flex flex-col">
          <h5 className=" text-sm font-semibold max-sm:text-sm">{caption}</h5>
          <p className="text-[#737774] text-xs max-sm:text-xs">{timeFrame}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="sm:text-2xl font-semibold text-xl">{value}</h2>
          <div className="flex items-center">
            <Image
              src={trendingIcon}
              alt="menu"
              width={16}
              height={16}
              className="object-contain w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
            <p className="text-[#054753] sm:text-sm text-xs">{percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
  return href ? <Link href={href}>{element}</Link> : element;
};

export default MetricCard;
