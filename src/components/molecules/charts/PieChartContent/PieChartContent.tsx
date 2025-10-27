"use client";

import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  amount: {
    label: "Revenue",
  },
  NGN: {
    label: "Naira",
    color: "#054753",
  },
  USD: {
    label: "Dollar",
    color: "#9ef769",
  },
  GBP: {
    label: "Pounds",
    color: "#ff9933",
  },
  EUR: {
    label: "Euro",
    color: "#fee300",
  },
} satisfies ChartConfig;

interface PieChartContentProps {
  chartData: Array<{
    currency: string;
    amount: number | unknown;
    fill: string;
  }>;
}

const PieChartContent = ({ chartData }: PieChartContentProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue</CardTitle>
        <CardDescription>
          Revenue distribution in different currencies
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />

            <Pie data={chartData} dataKey="amount">
              <LabelList
                dataKey="currency"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="currency" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartContent;
