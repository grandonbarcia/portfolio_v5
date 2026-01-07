'use client';
import Image from 'next/image';
import JIF_Logo from '../../assets/JIF_Logo.jpg';
import Shands_Logo from '../../assets/Shands.png';
import Orchard from '../../assets/Orchard.jpg';
import Seal_of_Santa_Fe_College from '../../assets/Seal_of_Santa_Fe_College.jpg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

export default function WorkExperience() {
  function Work() {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Image
            src={JIF_Logo}
            alt="JIF LOGO"
            className="w-12 h-12 rounded-full object-cover"
            placeholder="blur"
            sizes="48px"
          />
          <div className="flex flex-col">
            <CardDescription>Aug. 2021 - Present</CardDescription>
            <CardTitle>JIF Reprographics - Reprographics Technician</CardTitle>
            <ul className="ml-4 list-outside list-disc">
              <li>
                <CardDescription>
                  Perform a variety of technical duties in the operation of
                  high-speed printers and related reprographic equipment to
                  produce a wide variety of printed materials
                </CardDescription>
              </li>
              <li>
                <CardDescription>
                  Operate a variety of office equipment including a computer and
                  assigned software. Email, receive, log and scan reprographic
                  jobs into computers.
                </CardDescription>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={Shands_Logo}
            alt="Shands Logo"
            className="w-12 h-12 rounded-full object-cover"
            placeholder="blur"
            sizes="48px"
          />
          <div className="flex flex-col">
            <CardDescription>Apr. 2015 - Apr. 2020</CardDescription>
            <CardTitle>
              UF Health Shands Hospital - Support Technician
            </CardTitle>
            <ul className="ml-4 list-outside list-disc">
              <li>
                <CardDescription>
                  Optimized patient mobility by serving as a mobility assistant
                  to nursing staff.
                </CardDescription>
              </li>
              <li>
                <CardDescription>
                  Supported unit as desk clerk managing nurse call system,
                  answering telephone stocking supplies, filing, and ensuring a
                  clean environment of care.
                </CardDescription>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={Orchard}
            alt="Orchard Logo"
            className="w-12 h-12 rounded-full object-cover"
            placeholder="blur"
            sizes="48px"
          />
          <div className="flex flex-col">
            <CardDescription>Oct. 2018 - Sept. 2019</CardDescription>
            <CardTitle>Orchard Info Inc. - Front-End Developer</CardTitle>
            <ul className="ml-4 list-outside list-disc">
              <li>
                <CardDescription>
                  Produced and updated responsive web pages from Figma mockup to
                  create a smooth user experience.
                </CardDescription>
              </li>
              <li>
                <CardDescription>
                  Implemented job-application form for future employees to
                  submit their resumes and resulted in over 100 submissions.
                </CardDescription>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function Educ() {
    return (
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Image
            src={Seal_of_Santa_Fe_College}
            alt="Sante Fe College Logo"
            className="w-12 h-12 rounded-full object-cover"
            placeholder="blur"
            sizes="48px"
          />
          <div className="flex flex-col">
            <CardDescription>Dec. 2018</CardDescription>
            <CardTitle>Santa Fe College</CardTitle>
            <CardDescription>A.S. in Programming and Analysis</CardDescription>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[80vh] sm:h-[60vh] overflow-y-auto">
      <Tabs defaultValue="Work" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Work" className="cursor-pointer">
            Work
          </TabsTrigger>
          <TabsTrigger value="Education" className="cursor-pointer">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Work">
          <Card>
            <CardContent className="space-y-2">
              <Work />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Education">
          <Card>
            <CardContent className="space-y-2">
              <Educ />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
