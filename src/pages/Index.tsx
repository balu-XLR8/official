import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import StatusCard from "@/components/StatusCard";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-4 md:p-6 mb-20">
        <div className="grid grid-cols-3 gap-4">
          <StatusCard title="Forwarded" count={12} />
          <StatusCard title="Completed" count={8} />
          <StatusCard title="Rejected" count={3} />
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;