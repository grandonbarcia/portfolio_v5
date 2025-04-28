import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/ModeToggle';
import { FaFileDownload } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
// import { FaHtml5 } from 'react-icons/fa';
// import { SiCsswizardry } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import Headshot from '@/assets/headshot.jpg';
import WorkExperience from './components/WorkExperience';
import Kanban from '@/assets/kanban.jpg';
import Memory from '@/assets/memory.jpg';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SOCIALS_SIZE = 25;
const TECH_SIZE = 25;

export default function Home() {
  return (
    <div className="flex flex-col gap-10 relative mx-auto mt-6 max-w-xl">
      <div>
        <div className="flex justify-between items-center mb-10 ">
          <span className="text-2xl font-semibold">BG</span>
          <div className="flex justify-between items-center w-1/2">
            <span>about</span>
            <span>projects</span>
            <span>contact</span>
            <ModeToggle />
          </div>
        </div>
        <div className="flex gap-8 justify-between">
          <div>
            <h1 className="text-4xl font-semibold pb-4">
              Hi Hi, I{`'`}m Brandon 👋
            </h1>
            <div className="pb-2">
              31-year-old software developer from San Jose, CA
            </div>
            <div className="pb-4">
              I like to build interactive front-end apps, play the piano, and
              drink coffee
            </div>
            <div className="font-semibold">Available for work </div>
            <div className="flex items-center gap-8 mt-10 ">
              <Button>
                Resume <FaFileDownload />
              </Button>
              <div className="flex gap-6">
                <FaLinkedin size={SOCIALS_SIZE} />
                <FaGithub size={SOCIALS_SIZE} />
                <IoIosMail size={SOCIALS_SIZE} />
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
      <div className="relative my-6 grid  grid-cols-4 gap-2  ">
        <div className="flex flex-col items-center justify-center border py-3 rounded-2xl">
          <RiTailwindCssFill size={TECH_SIZE} />
          <div className="mt-2 ">Tailwind CSS</div>
        </div>
        <div className="flex flex-col items-center justify-center border  rounded-2xl">
          <SiTypescript size={TECH_SIZE} />
          <div className="mt-2">Typescript</div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-2xl">
          <FaReact size={TECH_SIZE} />
          <div className="mt-2">React.js</div>
        </div>
        <div className="flex flex-col items-center justify-center border  rounded-2xl">
          <RiNextjsFill size={TECH_SIZE} />
          <div className="mt-2">Next.js</div>
        </div>
      </div>
      <WorkExperience />
      <div>
        <div className="text-3xl font-semibold mb-8">personal projects</div>
        <div className="flex justify-between gap-4">
          <Card className="w-1/2 shadow-md">
            <CardHeader>
              <Image src={Kanban} alt="Kanban" className=" " />
              <CardTitle>Kanban Board</CardTitle>
              <CardDescription>
                Drag and drop your tasks to organize your work flow
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-1/2 shadow-md">
            <CardHeader>
              <Image src={Memory} alt="Memory" className=" " />
              <CardTitle>Memory Game</CardTitle>
              <CardDescription>
                Test your memory solo or with friends
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
