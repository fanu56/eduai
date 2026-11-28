import { ClipboardCheck } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

export default function PracticePage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Practice" title="Practice with purpose" description="Build understanding with topic-based questions, clear feedback, and revision that follows your syllabus." />
      <EmptyState icon={ClipboardCheck} title="Practice sets will appear here" description="Question sets, attempts, and feedback need the syllabus and assessment data model. Nothing is shown as completed until you actually submit work." actionLabel="Explore subjects" actionHref="/dashboard/subjects" />
    </>
  );
}
