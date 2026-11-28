import { MessageSquareText } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

export default function SessionsPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Chat history" title="Your tutoring sessions" description="Return to earlier explanations and pick up a study conversation where you left off." />
      <EmptyState icon={MessageSquareText} title="No tutoring conversations yet" description="When the AI tutor is connected and you begin a session, your saved conversations will appear here." actionLabel="Open AI tutor" actionHref="/dashboard/tutor" />
    </>
  );
}
