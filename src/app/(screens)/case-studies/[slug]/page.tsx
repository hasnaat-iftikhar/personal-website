// Components
import { Header, PageFooter } from "@/app/components";

// Sections
import BriefIntroduction from "./components/BriefIntroduction";
import ProjectDetailGrid from "./components/ProjectDetailGrid";
import FullWidthImage from "./components/FullWidthImage";
import Introduction from "./components/Introduction";
import ProjectDetailImageGrid from "./components/ProjectDetailImageGrid";

// Mock data
import { projectsData } from "@/app/mock";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;

  const selectedProject = projectsData.find((p) => p.id === slug);

  return <main className='flex flex-col gap-[96px] md:gap-[120px]'>
    <Header />

    <BriefIntroduction
      projectThumbnail={`${selectedProject?.media.thumbnail}`}
      projectName={selectedProject?.title ?? ""}
      projectDate={selectedProject?.date ?? ""}
      projectDeliverables={selectedProject?.deliverables ?? []}
      projectPurpose={selectedProject?.purpose ?? ""}
      projectRoles={selectedProject?.roles ?? []}
    />

    <FullWidthImage
      url={`${selectedProject?.media.coverImage}`}
    />

    <Introduction
      content={`${selectedProject?.details.introduction}`}
      projectIntroductionPicture={`${selectedProject?.media.introductionPicture}`}
    />

    <ProjectDetailImageGrid
      title="The Challenges"
      content={`${selectedProject?.details.challenges}`}
      gallery={selectedProject?.media.challenges ?? []}
    />

    <ProjectDetailGrid
      label="Solution"
      description={`${selectedProject?.details.solution}`}
    />

    <PageFooter />
  </main>
}