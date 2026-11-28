import { BookOpen } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/page-header";
import { SubjectCatalog } from "@/components/dashboard/subject-catalog";

export default function SubjectsPage() {
  return (
    <>
      <DashboardPageHeader eyebrow="My subjects" title="Explore your subjects" description="Browse the Cambridge O-Level subjects EduAI is being prepared to support." />
      <div className="mb-6 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5">
        <span className="mt-0.5 text-blue-700"><BookOpen size={19} /></span>
        <p className="text-sm leading-6 text-blue-950"><span className="font-bold">Free plan:</span> the planned allowance is up to two subjects. Subject selection and saving will be enabled once the student database is connected.</p>
      </div>
      <SubjectCatalog />
    </>
  );
}
