"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TransactionRecord } from "@/lib/types";
export const description = "A simple area chart";

interface AreaChartContentProps {
  title: string;
  description?: string;
  chartData: TransactionRecord[] | undefined;
}

const chartConfig = {
  NGN: {
    label: "Naira",
    color: "hsl(var(--chart-1))",
  },
  USD: {
    label: "Dollar",
    color: "hsl(var(--chart-2))",
  },
  GBP: {
    label: "Pounds",
    color: "hsl(var(--chart-2))",
  },
  EUR: {
    label: "Euro",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const AreaChartContent = ({
  title,
  description,
  chartData,
}: AreaChartContentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description !== undefined && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 8)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="NGN"
              type="natural"
              fill="#054753"
              fillOpacity={0.4}
              stroke="#054753"
              stackId="a"
            />
            <Area
              dataKey="USD"
              type="natural"
              fill="#9ef769"
              fillOpacity={0.4}
              stroke="#9ef769"
              stackId="a"
            />
            <Area
              dataKey="GBP"
              type="natural"
              fill="#ff9933"
              fillOpacity={0.4}
              stroke="#ff9933"
              stackId="a"
            />
            <Area
              dataKey="EUR"
              type="natural"
              fill="#fee300"
              fillOpacity={0.4}
              stroke="#fee300"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AreaChartContent;
