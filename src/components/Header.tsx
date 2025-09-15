import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4">
      <h1 className="text-lg font-semibold">Directives</h1>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Bell className="h-5 w-5 text-green-600" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  );
};