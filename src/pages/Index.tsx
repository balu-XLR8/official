import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { DirectiveList } from "@/components/DirectiveList";

const Index = () => {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col border-x bg-background">
      <Header />
      <div className="flex-1 overflow-y-auto pb-20"> {/* Padding bottom to avoid overlap with BottomNav */}
        <DirectiveList />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;