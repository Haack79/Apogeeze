import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface EventsChartProps {
  data: {
    time: number;
    ampm: 'AM' | 'PM';
    price: number;
  }[];
}

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const EventsChart: React.FC<EventsChartProps> = ({ data }) => {
  const chartData = data.map((point) => ({
    time: `${point.time}${point.ampm}`,
    price: point.price,
  }));

  return (
    <Card className="w-full h-[120px] max-w-xs p-0 align-right" suppressHydrationWarning>
        <h6 className="p-1">Price over Time</h6>
      <CardContent className="p-0 m-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              left: 5,
              right: 5,
              bottom: 100,
            }}
            width={220}
            height={100}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              width={5}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-price)",
              }}
              activeDot={{
                r: 2,  // Smaller active dot
              }}
            >
              <LabelList
                position="top"
                offset={5}  // Adjust the label position to fit within the chart area
                className="fill-foreground"
                fontSize={7}  // Smaller font size for the labels
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-row justify-end text-xs p-2">
        <div className="flex gap-2 font-medium leading-none">
          Trending up <TrendingUp className="h-3 w-3" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing price data over time
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default EventsChart;
