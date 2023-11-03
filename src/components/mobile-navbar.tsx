"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";


import { FC, useState } from "react";

interface MobileNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    refs: { name: string; href: string }[];
}

const MobileNavbar: FC<MobileNavbarProps> =  ({ className, ...props }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);


  return (
    <nav className="fixed grid lg:hidden items-center h-24 px-6 bg-background w-full ">
      <div className="flex flex-row w-full justify-end">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="">
            <Menu className="" />
          </SheetTrigger>
          <SheetContent className="">
            <div className="flex flex-col justify-center space-y-6 px-8 mx-auto h-screen">
              {props.refs.map((ref, index) => {
                return (
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="title hover:text-accent duration-500"
                    key={index}
                    href={ref.href}
                  >
                    {ref.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNavbar;