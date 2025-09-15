import { Home, BarChart2, ClipboardList, FileText, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background">
      <nav className="grid grid-cols-6 items-center justify-items-center p-2">
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/directives">
            <ClipboardList className="h-6 w-6" />
            <span className="text-xs mt-1">Directives</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/analytics">
            <BarChart2 className="h-6 w-6" />
            <span className="text-xs mt-1">Analytics</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/posts">
            <FileText className="h-6 w-6" />
            <span className="text-xs mt-1">Posts</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/messages">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xs mt-1">Messages</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1" asChild>
          <Link to="/profile">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </Button>
      </nav>
    </footer>
  );
}