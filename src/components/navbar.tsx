import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavBar: FC<NavBarProps> = async ({ className, ...props }) => {
  const refs = [
    {
      name: "about",
      href: "/#about",
    },
    {
      name: "experience",
      href: "/#experience",
    },
    {
      name: "education",
      href: "/#education",
    },
    {
      name: "blog",
      href: "/#blog",
    },
  ];

  return (
    <nav
      className={cn(
        "hidden fixed h-screen 2xl:flex flex-col justify-center space-y-6 w-56 px-8 mx-auto border-r",
        className
      )}
    >
      {refs.map((ref, index) => {
        return (
          <Link className="title hover:text-accent duration-500" key={index} href={ref.href}>
            {ref.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
