import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Generating some mock data for demonstration
const directives = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Directive ${i + 1}`,
  address: `${Math.floor(Math.random() * 900) + 100} ${['Main', 'Oak', 'Pine', 'Maple'][Math.floor(Math.random() * 4)]} St, ${['Springfield', 'Shelbyville', 'Ogdenville', 'North Haverbrook'][Math.floor(Math.random() * 4)]}`,
}));

const DirectivesPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-2">Directives</h1>
      <div className="flex flex-col gap-3">
        {directives.map((directive) => (
          <Link to={`/directives/${directive.id}`} key={directive.id} className="no-underline">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{directive.title}</CardTitle>
                <CardDescription className="text-sm">{directive.address}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DirectivesPage;