import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/ModeToggle';
import { FaFileDownload } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { PiCopyrightFill } from 'react-icons/pi';
import Headshot from '@/assets/headshot.jpg';
import WorkExperience from './components/WorkExperience';
import Melodic from '@/assets/MM.jpg';
import Memory from '@/assets/memory.jpg';
import MagneticIcon from './components/MagneticIcon';
import TT from '@/assets/TT.jpg';
// import Piano from './components/Piano';
import ProjectCard from './components/ProjectCard';
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

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-16 relative mx-auto mt-6 px-2 sm:px-0 sm:max-w-xl">
      <div>
        <div className="flex justify-between items-center mb-10 ">
          <span className="text-2xl font-semibold">BG</span>
          <div className="flex justify-end items-center w-1/2">
            <ModeToggle />
          </div>
        </div>
        <div className="flex gap-8 justify-between">
          <div>
            <h1
              className={`${dm_Serif_Text.className} text-4xl font-semibold pb-4`}
            >
              Hi Hi, I{`'`}m Brandon 👋
            </h1>
            <div className="pb-2">
              31-year-old software developer from San Jose, CA
            </div>
            <div className="pb-4">
              I’m all about crafting interactive front-end apps, jamming out on
              my piano, and surviving on way too much coffee.
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
              <span className="underline">Available for work</span>
            </div>
            <div className="flex items-center gap-8 mt-10 ">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="cursor-pointer"
              >
                <Button className="group cursor-pointer">
                  Resume
                  <FaFileDownload className="group-hover:animate-bounce" />
                </Button>
              </a>
              <div className="flex gap-6">
                <MagneticIcon>
                  <a
                    href="https://www.linkedin.com/in/brandon-garcia-54708516b/"
                    target="_blank"
                  >
                    <FaLinkedin
                      size={SOCIALS_SIZE}
                      className="hover:text-sky-600 "
                    />
                  </a>
                </MagneticIcon>
                <MagneticIcon>
                  <a href="https://github.com/grandonbarcia" target="_blank">
                    <FaGithub
                      size={SOCIALS_SIZE}
                      className="hover:text-green-600"
                    />
                  </a>
                </MagneticIcon>
                <MagneticIcon>
                  <a href="mailto:grandonleebarcia@gmail.com">
                    <IoIosMail
                      size={SOCIALS_SIZE}
                      className="hover:text-red-700"
                    />
                  </a>
                </MagneticIcon>
              </div>
            </div>
          </div>
          <Image
            src={Headshot}
            alt="headshot"
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="relative my-6 grid  grid-cols-4 gap-2 text-center  ">
        <Card className="group">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>
              <RiTailwindCssFill
                size={TECH_SIZE}
                className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1  group-hover:scale-110  group-hover:text-cyan-500"
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
                className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1  group-hover:scale-110  group-hover:text-blue-500"
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
                className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1  group-hover:scale-110  group-hover:text-blue-300"
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
                className="transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1  group-hover:scale-120  "
              />
            </CardTitle>
            <CardDescription>Next.js</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* <Piano /> */}
      <WorkExperience />

      <div>
        <div
          className={`${dm_Serif_Text.className} text-4xl font-semibold mb-6`}
        >
          personal projects
        </div>

        <div className="flex flex-col gap-8">
          <ProjectCard
            title={'Melodic Moments'}
            image={Melodic}
            description={'Listen to songs ad free at work!'}
            github={'https://github.com/grandonbarcia/melodic-moments'}
            live={'https://magical-douhua-499239.netlify.app/'}
          />
          <ProjectCard
            title={'Memory Game'}
            image={Memory}
            description={'Test your memory solo or with friends'}
            github={'https://github.com/grandonbarcia/memory-game'}
            live={'https://cheery-scone-e35758.netlify.app/'}
          />
          <ProjectCard
            title={'Typing Test'}
            image={TT}
            description={'Test your typing speed and accuracy!'}
            github={'https://github.com/grandonbarcia/typing-test'}
            live={'https://vigilant-spence-6f0b27.netlify.app/'}
          />
        </div>
      </div>

      <div className="border-t-2 pb-4">
        <div className="flex justify-between  pt-4">
          <div className="flex items-center">
            <PiCopyrightFill />
            BG
          </div>
          <div className="flex gap-6">
            <MagneticIcon>
              <a
                href="https://www.linkedin.com/in/brandon-garcia-54708516b/"
                target="_blank"
              >
                <FaLinkedin
                  size={SOCIALS_SIZE}
                  className="hover:text-sky-600"
                />
              </a>
            </MagneticIcon>
            <MagneticIcon>
              <a href="https://github.com/grandonbarcia" target="_blank">
                <FaGithub
                  size={SOCIALS_SIZE}
                  className="hover:text-green-600"
                />
              </a>
            </MagneticIcon>
            <MagneticIcon>
              <a href="mailto:grandonleebarcia@gmail.com">
                <IoIosMail size={SOCIALS_SIZE} className="hover:text-red-700" />
              </a>
            </MagneticIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
