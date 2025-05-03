'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Piano() {
  function play(note: string) {
    new Audio(`./piano-mp3/${note}.mp3`).play();
  }

  return (
    <div
      className="flex  justify-center  h-[200px]"
      onKeyDown={(e) => console.log(e.key)}
    >
      <div className="relative flex flex-row h-full ">
        <div className="relative h-3/4 w-full">
          <Button
            onClick={() => play('C5')}
            className="h-full bg-white dark:bg-black dark:text-white hover:bg-slate-200  border shadow text-black items-end"
          >
            C
          </Button>
          <Button
            onClick={() => play('D5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end"
          >
            D
          </Button>
          <Button
            onClick={() => play('E5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end"
          >
            E
          </Button>
          <Button
            onClick={() => play('F5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end"
          >
            F
          </Button>
          <Button
            onClick={() => play('G5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end"
          >
            G
          </Button>
          <Button
            onClick={() => play('A5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end"
          >
            A
          </Button>
          <Button
            onClick={() => play('B5')}
            className="h-full bg-white hover:bg-slate-200 border shadow text-black items-end"
          >
            B
          </Button>
        </div>
        <div className="absolute h-1/2 w-full">
          <Button
            onClick={() => play('Db5')}
            className="h-full ml-5 items-end hover:bg-zinc-800"
          >
            <p className="">D</p>
            <p className="absolute ml-4">b</p>
          </Button>
          <Button onClick={() => play('Eb5')} className="h-full ml-1 items-end">
            E<p className="absolute ml-4">b</p>
          </Button>
          <Button
            onClick={() => play('Gb5')}
            className="h-full ml-10.5 items-end"
          >
            G<p className="absolute ml-4">b</p>
          </Button>
          <Button onClick={() => play('Ab5')} className="h-full ml-1 items-end">
            A<p className="absolute ml-4">b</p>
          </Button>
          <Button onClick={() => play('Bb5')} className="h-full ml-1 items-end">
            B<p className="absolute ml-4">b</p>
          </Button>

          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
        </div>
      </div>
    </div>
  );
}
