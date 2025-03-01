// Components
import Banner from "@/app/components/base/Banner";
import Faqs from "@/app/components/base/Faqs";
import { Footer, Header } from "@/app/components";

// Icons
import { Code } from "lucide-react";

// Sections
import BriefIntroduction from "./components/sections/BriefIntroduction";
import ProjectDetailGrid from "./components/sections/ProjectDetailGrid";
import FullWidthImage from "./components/sections/FullWidthImage";
import Introduction from "./components/sections/Introduction";
import ProjectDetailImageGrid from "./components/sections/ProjectDetailImageGrid";

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

    <Banner
      image=''
      headline='Hey, It&apos;s me!!'
      title='Turning Ideas into Reality, One Line of Code at a Time'
      description='Building smooth, fast, and modern web apps isn&apos;t just my work—it&apos;s what I love doing. Every project I take on is crafted with care, ensuring quality, performance, and attention to detail.'
    />

    <Faqs />

    <div>
      <Banner
        title='Let&apos;s meet!'
        description='Book a free 15-minute session where we will discuss your project, your issues and how to solve them.'
        descriptionClassName='max-w-[370px]'
        image="/"
        buttons={[
          {
            children: "Book a free consultation",
            onClick: () => { }
          },
          {
            children: (
              <>
                <Code width={22} height={22} />
                Start a project
              </>
            ),
            style: "outline",
            className: "bg-white"
          }
        ]}
      />

      <Footer />
    </div>
  </main>
}