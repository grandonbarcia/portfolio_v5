import { Button } from '@/components/ui/button';

export default function Piano() {
  return (
    <div className="flex  justify-center border h-[200px]">
      <div className="relative flex flex-row h-full ">
        <div className="relative h-3/4 w-full">
          <Button className="h-full bg-white dark:bg-black dark:text-white hover:bg-slate-200  border shadow text-black items-end">
            C
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end">
            D
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end">
            E
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end">
            F
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end">
            G
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200  border shadow text-black items-end">
            A
          </Button>
          <Button className="h-full bg-white hover:bg-slate-200 border shadow text-black items-end">
            B
          </Button>
        </div>
        <div className="absolute h-1/2 w-full">
          <Button className="h-full ml-5 items-end hover:bg-zinc-800">A</Button>
          <Button className="h-full ml-1 items-end">B</Button>
          <Button className="h-full ml-10.5 items-end">C</Button>
          <Button className="h-full ml-1 items-end">D</Button>
          <Button className="h-full ml-1 items-end">E</Button>

          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
          {/* <Button className="h-full ">C</Button> */}
        </div>
      </div>
    </div>
  );
}
