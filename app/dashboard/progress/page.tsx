import { ChartNoAxesCombined } from "lucide-react";
import { EmptyState } from "@/components/dashboard/empty-state";
import { DashboardPageHeader } from "@/components/dashboard/page-header";

export default function ProgressPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="Progress" title="See how your learning grows" description="Review completed topics, practice results, and areas to revisit, using only activity you have actually recorded." />
      <EmptyState icon={ChartNoAxesCombined} title="Your progress starts with your first study session" description="There is no recorded learning activity yet. Once lessons and practice are connected, this page will summarize your work without inventing scores or milestones." actionLabel="Open AI tutor" actionHref="/dashboard/tutor" />
    </>
  );
}
