import { cn } from "@/lib/utils";
import { FC } from "react";
import Link from "next/link";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(" ", className)}>
      <Link
        className="text-2xl font-mono leading-none underline flex justify-center hover:text-accent duration-500"
        href="mailto:hugo.pitorro@tum.de"
      >
        say hi
      </Link>
    </footer>
  );
};

export default Footer;
