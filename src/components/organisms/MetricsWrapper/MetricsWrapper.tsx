"use client";

import MetricCardLoader from "@/components/atoms/skeletonLoader/MetricCardLoader";
import MetricCard from "@/components/molecules/MetricCard/MetricCard";

import { numberWithCommas } from "@/lib/helpers";
import { AdminStatsType } from "@/lib/types";

interface MetricsWrapperProps {
  adminStats: AdminStatsType | undefined;
  isPending: boolean;
}

const MetricsWrapper = ({ isPending, adminStats }: MetricsWrapperProps) => {
  return (
    <>
      {isPending ? (
        <MetricCardLoader />
      ) : (
        <div className="flex flex-wrap gap-6">
          <MetricCard
            caption="Total Users"
            timeFrame="This Month"
            mainIcon="/assets/icons/Group2.svg"
            trendingIcon="/assets/icons/arrow-up.svg"
            percentage={2}
            value={
              adminStats?.totalUsers
                ? numberWithCommas(adminStats?.totalUsers)
                : 0
            }
          />
          <MetricCard
            caption="Total Jobs"
            timeFrame="This Month"
            mainIcon="/assets/icons/Group6.svg"
            trendingIcon="/assets/icons/arrow-up.svg"
            percentage={10}
            value={
              adminStats?.totalJobs
                ? numberWithCommas(adminStats?.totalJobs)
                : 0
            }
          />
          <MetricCard
            caption="Total Materials"
            timeFrame="This Month"
            mainIcon="/assets/icons/Group5.svg"
            trendingIcon="/assets/icons/arrow-up.svg"
            percentage={2}
            value={
              adminStats?.totalProducts
                ? numberWithCommas(adminStats?.totalProducts)
                : 0
            }
          />
          <MetricCard
            caption="Private Experts"
            timeFrame="This Month"
            mainIcon="/assets/icons/Group1.svg"
            trendingIcon="/assets/icons/arrow-up.svg"
            percentage={1}
            value={
              adminStats?.totalPrivateExperts
                ? numberWithCommas(adminStats?.totalPrivateExperts)
                : 0
            }
          />
        </div>
      )}
    </>
  );
};

export default MetricsWrapper;
