'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Kanban from '@/assets/kanban.jpg';

import { Badge } from '@/components/ui/badge';
import { PiMonitor } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';

type ProjectCard = {
  title: string;
  image: StaticImageData;
  description: string;
  github: string;
  live: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  github,
  live,
}: ProjectCard) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['7.5deg', '-7.5deg']
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-7.5deg', '7.5deg']
  );

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = (e: any) => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative rounded-2xl bg-black dark:bg-white "
    >
      <Card
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <CardHeader
          style={{
            transform: 'translateZ(75px)',
          }}
        >
          <Image
            src={image}
            alt="project image"
            className="rounded-2xl shadow "
          />
          <CardTitle
            style={{
              transform: 'translateZ(50px)',
            }}
          >
            {title}
          </CardTitle>
          <CardDescription
            style={{
              transform: 'translateZ(50px)',
            }}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter
          style={{
            transform: 'translateZ(75px)',
          }}
          className="gap-2"
        >
          <a href={github} target="_blank">
            <Badge variant="outline" className="cursor-pointer">
              <FiGithub />
              Source
            </Badge>
          </a>
          <a href={live} target="_blank">
            <Badge variant="outline" className="cursor-pointer">
              <PiMonitor /> Live
            </Badge>
          </a>
        </CardFooter>
      </Card>

      {/* </div> */}
    </motion.div>
  );
}
