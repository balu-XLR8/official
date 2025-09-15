import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForwardedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Forwarded</h1>
      <p className="text-lg text-muted-foreground mb-8">This page is under construction.</p>
      <Button asChild>
        <Link to="/">Go Back to Home</Link>
      </Button>
    </div>
  );
};

export default ForwardedPage;