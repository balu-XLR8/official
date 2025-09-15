import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  count: number;
}

export default function StatusCard({ title, count }: StatusCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow text-center">
      <CardContent className="p-4 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
      </CardContent>
    </Card>
  );
}