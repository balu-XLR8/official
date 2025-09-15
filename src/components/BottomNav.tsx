import { LayoutDashboard, User, MessageSquare, FileText } from "lucide-react";

export const BottomNav = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 border-t bg-background">
      <nav className="grid h-16 grid-cols-4 items-center justify-items-center gap-4 px-2">
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-xs">Analytics</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <FileText className="h-6 w-6" />
          <span className="text-xs">Postes</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs">Messages</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </a>
      </nav>
    </footer>
  );
};