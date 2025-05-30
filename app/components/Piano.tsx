'use client';

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
            className="h-full bg-white  hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            C
          </Button>
          <Button
            onClick={() => play('D5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            D
          </Button>
          <Button
            onClick={() => play('E5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            E
          </Button>
          <Button
            onClick={() => play('F5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            F
          </Button>
          <Button
            onClick={() => play('G5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            G
          </Button>
          <Button
            onClick={() => play('A5')}
            className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end cursor-pointer"
          >
            A
          </Button>
          <Button
            onClick={() => play('B5')}
            className="h-full bg-white hover:bg-slate-200 border shadow text-black items-end cursor-pointer"
          >
            B
          </Button>
        </div>
        <div className="absolute h-1/2 w-full">
          <Button
            onClick={() => play('Db5')}
            className="h-full ml-5 items-end dark:bg-black dark:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
            <p className="">D</p>
            <p className="absolute ml-4">b</p>
          </Button>
          <Button
            onClick={() => play('Eb5')}
            className="h-full ml-1 items-end dark:bg-black dark:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
            E<p className="absolute ml-4">b</p>
          </Button>
          <Button
            onClick={() => play('Gb5')}
            className="h-full ml-10.5 items-end dark:bg-black dark:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
            G<p className="absolute ml-4">b</p>
          </Button>
          <Button
            onClick={() => play('Ab5')}
            className="h-full ml-1 items-end dark:bg-black dark:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
            A<p className="absolute ml-4">b</p>
          </Button>
          <Button
            onClick={() => play('Bb5')}
            className="h-full ml-1 items-end dark:bg-black dark:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
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
