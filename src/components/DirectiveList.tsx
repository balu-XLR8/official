import { DirectiveCard, DirectiveStatus } from "./DirectiveCard";

const directives = [
  {
    id: 1,
    title: "Directive #001",
    description: "Review the quarterly budget proposal.",
    status: "Forwarded" as DirectiveStatus,
  },
  {
    id: 2,
    title: "Directive #002",
    description: "Finalize the marketing campaign for Q3.",
    status: "Completed" as DirectiveStatus,
  },
  {
    id: 3,
    title: "Directive #003",
    description: "Onboard the new software engineer.",
    status: "Rejected" as DirectiveStatus,
  },
  {
    id: 4,
    title: "Directive #004",
    description: "Prepare the presentation for the board meeting.",
    status: "Forwarded" as DirectiveStatus,
  },
];

export const DirectiveList = () => {
  return (
    <main className="flex-1 space-y-4 p-4">
      {directives.map((directive) => (
        <DirectiveCard
          key={directive.id}
          title={directive.title}
          description={directive.description}
          status={directive.status}
        />
      ))}
    </main>
  );
};