import StatusCard from "@/components/StatusCard";

const Index = () => {
  return (
    <div className="flex flex-col gap-4">
      <StatusCard title="Forwarded" count={12} href="/forwarded" />
      <StatusCard title="Completed" count={8} href="/completed" />
      <StatusCard title="Rejected" count={3} href="/rejected" />
    </div>
  );
};

export default Index;