import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const DirectiveDetailsPage = () => {
  const { id } = useParams();

  // In a real app, you would fetch directive details based on the id
  const directive = {
    id: id,
    title: `Directive ${id}`,
    address: `123 Example St, City, State`,
    details: "This is where the full details of the directive would be displayed. It could include instructions, attachments, or any other relevant information."
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Directive Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>{directive.title}</CardTitle>
          <CardDescription>{directive.address}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{directive.details}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DirectiveDetailsPage;