import { FileText } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

export default function PastPapersPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Exam preparation" title="Past papers" description="A focused place for timed exam practice, worked solutions, and review by syllabus topic." />
      <EmptyState icon={FileText} title="The paper library is not connected yet" description="EduAI will only list papers and marking resources that it is authorized to provide. This page will fill in when that content source is ready." actionLabel="Explore subjects" actionHref="/dashboard/subjects" />
    </>
  );
}
