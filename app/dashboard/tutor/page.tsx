import { BrainCircuit } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

export default function TutorPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="AI tutor" title="Learn one concept at a time" description="The tutor workspace is where you’ll ask questions, work through examples, and get explanations shaped around O-Level study." />
      <EmptyState icon={BrainCircuit} title="Your tutor is being prepared" description="This space will become interactive when the server-side AI service, subject access checks, and usage limits are in place." actionLabel="Browse subjects" actionHref="/dashboard/subjects" />
    </>
  );
}
