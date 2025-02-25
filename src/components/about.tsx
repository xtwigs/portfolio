import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import Spaceship from "@/images/spaceship.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

const About: FC<AboutProps> = async ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 max-w-3xl py-8 pb-0 lg:py-10",
        className
      )}
    >
      <Image
        className="rounded-full h-64 w-64 ring-2 ring-white place-self-center"
        alt="Avatar"
        src={Spaceship}
      />
      <div>
        <CardHeader>
          <CardTitle className="text-4xl bg-clip-text text-transparent bg-gradient-to-l from-primary to-accent">
            hugo pitorro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-mono">
            i&apos;m a machine learning researcher at the Instituto de
            Telecomunicações in Lisbon
          </h2>
        </CardContent>
        <CardFooter className="flex flex-row gap-6">
          <Link
            href="mailto:hugo.pitorro@gmail.com"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full hover:text-white duration-500"
            )}
          >
            <Mail />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hugo-henrique-pitorro"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full hover:text-white duration-500"
            )}
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/xtwigs"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full hover:text-white duration-500"
            )}
          >
            <Github />
          </Link>
          <Link
            href="/cv.pdf"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-full hover:text-white duration-500"
            )}
          >
            <FileText />
          </Link>
        </CardFooter>
      </div>
    </div>
  );
};

export default About;
