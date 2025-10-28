import { Skeleton } from "@/components/ui/skeleton";

const TableLoader = () => {
  return (
    <div className="space-y-2 pt-10">
      <div className="flex justify-between gap-10">
        <Skeleton className="max-w-sm w-full h-8 rounded-full bg-gray-300" />
        <Skeleton className="max-w-[150px] w-full h-8 rounded-lg bg-gray-300 max-sm:hidden" />
      </div>
      <div className="space-y-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((skeleton) => (
          <Skeleton
            key={skeleton}
            className="w-full h-10 rounded-lg bg-gray-300"
          />
        ))}
      </div>
      <div className="flex justify-between gap-10">
        <Skeleton className="max-w-[250px] w-full h-8 rounded-lg bg-gray-300" />
        <Skeleton className="max-w-[250px] w-full h-8 rounded-lg bg-gray-300 max-sm:hidden" />
      </div>
    </div>
  );
};

export default TableLoader;
