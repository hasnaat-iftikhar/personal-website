import { CSSProperties } from "react";

// Components
import { Button, Container, Header } from "./components";

// Fonts
import { MediaSans } from "./utils/fonts";

// Icons
import { Code, Figma } from "lucide-react";

export default function Home() {
  const headingClassNames = `${MediaSans.className} text-[9vw] leading-[100%]`;

  return (
    <main>
      <Header />

      <section className="mt-[96px]">
            <Container>
                <div className='flex flex-col gap-6'>
                    <p className='text-[32px] text-[#1B1B1B]'>👋 Hey, I&apos;m Hasnaat and I&apos;m a</p>

                    <div className='flex flex-col'>
                        <h2 className={headingClassNames}>Front-End Developer</h2>
                        <h2
                            className={headingClassNames}
                            style={{
                                WebkitTextStroke: "2px black",
                                color:"#fff"
                            } as CSSProperties}    
                        >Content Creator</h2>
                    </div>

                    <p className='text-[32px]'>based in Lahore, Pakistan.</p>

                    <div className='flex justify-start items-center gap-3'>
                        <Button>
                            <Code width={22} height={22} />
                            You need a developer
                        </Button>
                        <Button
                            style='outline'
                        >
                            <Figma width={22} height={22} />
                            You need a designer
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    </main>
  );
}
