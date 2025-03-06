// Components
import { Header, PageFooter } from "@/app/components";

// Sections
import BriefIntroduction from "./components/BriefIntroduction";
import ProjectDetailGrid from "./components/ProjectDetailGrid";
import FullWidthImage from "./components/FullWidthImage";
import Introduction from "./components/Introduction";
import ProjectDetailImageGrid from "./components/ProjectDetailImageGrid";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  console.log(slug)

  return <main className='flex flex-col gap-[96px] md:gap-[120px]'>
    <Header />

    <BriefIntroduction />

    <FullWidthImage
      url="/"
    />

    <Introduction
      content={`Modern organizations deal with a wide variety of data types (technical documents, multimedia files, functional descriptions), often spread across multiple tools. This fragmentation makes it difficult to centralize and access information effectively.

      Key Challenges Identified:
- Time wasted searching for scattered information.
- Doubts about data reliability due to multiple versions.
- Limited collaboration between internal teams and external partners.

User needs Identified:
- Need for a common philosophy in data organisation.
- Need for an efficient system to centralise and identify the right data.
- The need to use data effectively.
- Need for a secure, collaborative system.
        `}
    />

    <ProjectDetailImageGrid
      title="The Challenges"
      content="The existing platform was struggling with poor performance, low conversion rates, and an outdated design that didn't reflect the brand's premium positioning. Mobile users particularly experienced issues with navigation and checkout."
      gallery={{
        image1: "/",
        image2: "/"
      }}
    />

    <ProjectDetailGrid
      label="Solution"
      description={`The existing platform was struggling with poor performance, low conversion rates, and an outdated design that didn't reflect the brand's premium positioning. Mobile users particularly experienced issues with navigation and checkout.

The existing platform was struggling with poor performance, low conversion rates, and an outdated design that didn't reflect the brand's premium positioning. Mobile users particularly experienced issues with navigation and checkout.

- The existing platform was struggling with poor performance, low conversion rates, and an outdated design that didn't reflect the brand'
- The existing platform w
- The existing platform was struggling rticularly experienced issues with navigation and checkout.`}
    />

    <PageFooter />
  </main>
}