'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import JIF_Logo from '../../assets/JIF_Logo.jpg';
import Shands_Logo from '../../assets/Shands.png';
import Orchard from '../../assets/Orchard.jpg';
import Seal_of_Santa_Fe_College from '../../assets/Seal_of_Santa_Fe_College.jpg';

export default function WorkExperience() {
  const [workBtn, setWorkBtn] = useState(true);
  const [educBtn, setEducBtn] = useState(false);

  function toggleWork() {
    setWorkBtn(true);
    setEducBtn(false);
  }

  function toggleEduc() {
    setWorkBtn(false);
    setEducBtn(true);
  }

  function Work() {
    return (
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Image
            src={JIF_Logo}
            alt="JIF LOGO"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div>Aug. 2021 - Present</div>
            <div>JIF Reprographics</div>
            <div>Reprographics Technician</div>
            <ul className="ml-4 list-outside list-disc">
              <li>
                Perform a variety of technical duties in the operation of
                high-speed printers and related reprographic equipment to
                produce a wide variety of printed materials
              </li>
              <li>
                Operate a variety of office equipment including a computer and
                assigned software. Email, receive, log and scan reprographic
                jobs into computers.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={Shands_Logo}
            alt="Shands Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div>Apr. 2015 - Apr. 2020</div>
            <div>UF Health Shands Hospital</div>
            <div>Support Technician</div>
            <ul className="ml-4 list-outside list-disc">
              <li>
                Optimized patient mobility by serving as a mobility assistant to
                nursing staff.
              </li>
              <li>
                Supported unit as desk clerk managing nurse call system,
                answering telephone stocking supplies, filing, and ensuring a
                clean environment of care.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={Orchard}
            alt="Orchard Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div>Oct. 2018 - Sept. 2019</div>
            <div>Orchard Info Inc.</div>
            <div>Front-End Developer</div>
            <ul className="ml-4 list-outside list-disc">
              <li>
                Produced and updated responsive web pages from Figma mockup to
                create a smooth user experience.
              </li>
              <li>
                Implemented job-application form for future employees to submit
                their resumes and resulted in over 100 submissions.
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
          />
          <div className="flex flex-col">
            <div>Dec. 2018</div>
            <div>Santa Fe College</div>
            <div>A.S. in Programming and Analysis</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex text-center justify-between gap-1 rounded-xl p-2">
        <Button
          className="w-1/2 rounded-xl cursor-pointer"
          variant={workBtn ? 'default' : 'secondary'}
          onClick={toggleWork}
        >
          Work{' '}
        </Button>
        <Button
          className="w-1/2 rounded-xl  cursor-pointer"
          variant={educBtn ? 'default' : 'secondary'}
          onClick={toggleEduc}
        >
          Education
        </Button>
      </div>
      <div className="border rounded p-7">{workBtn ? <Work /> : <Educ />}</div>
    </div>
  );
}
