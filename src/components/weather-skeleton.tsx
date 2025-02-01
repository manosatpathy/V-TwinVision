import { Skeleton } from "./ui/skeleton";
const WeatherSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <Skeleton className="h-[300px] w-full rounded-lg"></Skeleton>
        <Skeleton className="h-[300px] w-full rounded-lg"></Skeleton>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-[300px] w-full rounded-lg"></Skeleton>
        <Skeleton className="h-[300px] w-full rounded-lg"></Skeleton>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
