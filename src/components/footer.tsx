import { cn } from "@/lib/utils";
import { FC } from "react";
import Link from "next/link";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn("text-2xl font-mono leading-none ", className)}>
      something caught your eye?
      <Link
        className="ml-2 underline hover:text-accent duration-500"
        href="mailto:hugo.pitorro@tum.de"
      >
        reach out
      </Link>
    </footer>
  );
};

export default Footer;
