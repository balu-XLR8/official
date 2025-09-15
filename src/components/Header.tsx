import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <h1 className="text-xl font-semibold">Official</h1>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Bell className="h-5 w-5 text-green-500" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </header>
  );
}