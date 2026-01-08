import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/ModeToggle';
import { FaFileDownload, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { PiCopyrightFill } from 'react-icons/pi';
import Headshot from '@/assets/headshot.jpg';
import WorkExperience from './components/WorkExperience';
import RouteRank from '@/assets/Routerank.png';
import Thryve from '@/assets/Thryve.png';
import Memory from '@/assets/memory.jpg';

import ProjectCard from './components/ProjectCard';
import SocialLinks from './components/SocialLinks';
import { DM_Serif_Text } from 'next/font/google';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SOCIALS_SIZE = 25;
const TECH_SIZE = 30;

const dm_Serif_Text = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
});

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brandon Garcia',
  url: 'https://brandongarcia.dev',
  image: 'https://brandongarcia.dev/og-image.png',
  jobTitle: 'Front-End Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Available for hire',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/brandon-garcia-54708516b/',
    'https://github.com/grandonbarcia',
  ],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
};

export default function Home() {
  const projects = [
    {
      title: 'Thryve ',
      image: Thryve,
      description:
        'Track nutrition, monitor vitals, log workouts, and connect with a community committed to healthier lifestyles',
      github: 'https://github.com/grandonbarcia/health-tracker',
      live: 'https://genuine-sable-bf0933.netlify.app/',
    },
    {
      title: 'RouteRank',
      image: RouteRank,
      description:
        'We analyze your entire Next.js stack for optimization opportunities.We understand App Routers, metadata APIs, and performance. Get actionable insights that turn into real growth.',
      github: 'https://github.com/grandonbarcia/routerank',
      live: 'https://velvety-queijadas-681bfb.netlify.app/',
    },
    {
      title: 'Memory Game',
      image: Memory,
      description: 'Test your memory solo or with friends',
      github: 'https://github.com/grandonbarcia/memory-game',
      live: 'https://genuine-sable-bf0933.netlify.app/',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col gap-12 relative mx-auto mt-6 px-2 sm:px-0 sm:max-w-xl">
        <section aria-labelledby="intro-heading">
          <header className="flex justify-between items-center mb-10">
            <span className="text-2xl font-semibold">BG</span>
            <div className="flex justify-end items-center w-1/2">
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-col sm:flex-row gap-8 justify-between">
            <div className="text-center sm:text-left">
              <h1
                id="intro-heading"
                className={`${dm_Serif_Text.className} text-4xl font-semibold pb-4`}
              >
                Hi Hi, I{`'`}m Brandon 👋
              </h1>
              <p className="pb-2">
                31-year-old software developer from San Jose, CA
              </p>
              <p className="pb-4">
                I&apos;m all about crafting interactive front-end apps, jamming
                out on my piano, and surviving on way too much coffee.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <span className="underline">Available for work</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-8 mt-10">
                <a
                  href="/Brandon_Garcia_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Download resume PDF"
                >
                  <Button className="group cursor-pointer">
                    Resume
                    <FaFileDownload className="group-hover:animate-bounce" />
                  </Button>
                </a>
                <SocialLinks
                  size={SOCIALS_SIZE}
                  className="flex gap-6"
                  ariaLabel="Header social links"
                />
              </div>
            </div>
            <Image
              src={Headshot}
              alt="Brandon Garcia headshot"
              className="mx-auto order-first sm:mx-0 sm:order-none w-36 h-36 rounded-full object-cover"
              priority
              placeholder="blur"
              sizes="(max-width: 640px) 144px, 144px"
            />
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="relative my-6">
          <h2 id="skills-heading" className="sr-only">
            Technical Skills
          </h2>
          <div className="grid grid-cols-4 gap-2 text-center">
            <Card className="group">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>
                  <RiTailwindCssFill
                    size={TECH_SIZE}
                    className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-cyan-500"
                  />
                </CardTitle>
                <CardDescription>Tailwind CSS</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>
                  <SiTypescript
                    size={TECH_SIZE}
                    className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-blue-500"
                  />
                </CardTitle>
                <CardDescription>TypeScript</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>
                  <FaReact
                    size={TECH_SIZE}
                    className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-blue-300"
                  />
                </CardTitle>
                <CardDescription>React.js</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>
                  <RiNextjsFill
                    size={TECH_SIZE}
                    className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                </CardTitle>
                <CardDescription>Next.js</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <WorkExperience />

        <section aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className={`${dm_Serif_Text.className} text-4xl font-semibold mb-6`}
          >
            Personal Projects
          </h2>

          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
                github={project.github}
                live={project.live}
              />
            ))}
          </div>
        </section>

        <footer className="border-t-2 pb-4">
          <div className="flex justify-between pt-4">
            <div className="flex items-center gap-1">
              <PiCopyrightFill aria-hidden="true" />
              <span>{new Date().getFullYear()} BG</span>
            </div>
            <SocialLinks
              size={SOCIALS_SIZE}
              className="flex gap-6"
              ariaLabel="Footer social links"
            />
          </div>
        </footer>
      </main>
    </>
  );
}
