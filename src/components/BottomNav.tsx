import { BarChart2, ClipboardList, FileText, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background">
      <nav className="grid grid-cols-5 items-center justify-items-center p-2">
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1">
          <ClipboardList className="h-6 w-6" />
          <span className="text-xs mt-1">Directives</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1">
          <BarChart2 className="h-6 w-6" />
          <span className="text-xs mt-1">Analytics</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1">
          <FileText className="h-6 w-6" />
          <span className="text-xs mt-1">Posts</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1">
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Messages</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center h-auto p-1">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Button>
      </nav>
    </footer>
  );
}