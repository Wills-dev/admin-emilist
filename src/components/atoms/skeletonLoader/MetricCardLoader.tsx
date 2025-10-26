import { Skeleton } from "@/components/ui/skeleton";

const MetricCardLoader = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      {["1", "2", "3", "4"].map((skeleton) => (
        <Skeleton
          key={skeleton}
          className="h-28 w-fit min-w-[255px] rounded-lg bg-gray-300"
        />
      ))}
    </div>
  );
};

export default MetricCardLoader;
