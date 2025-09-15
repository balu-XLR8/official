import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-4 md:p-6 mb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}