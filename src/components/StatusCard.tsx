import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface StatusCardProps {
  title: string;
  count: number;
  href: string;
}

export default function StatusCard({ title, count, href }: StatusCardProps) {
  return (
    <Link to={href} className="no-underline">
      <Card className="hover:shadow-lg transition-shadow text-center">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold">{count}</div>
          <p className="text-sm text-muted-foreground mt-1">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}