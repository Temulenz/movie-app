"use client";

import * as React from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggler } from "./themeToggler";
import { ChevronRight } from "lucide-react";

const components: { title: string; href: string }[] = [
  {
    title: "Action",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Adventure",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Animation",
    href: "/docs/primitives/progress",
  },
  {
    title: "Biography",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Comedy",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Crime",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Documentary",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Drama",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Family",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Fantasy",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Film-Noir",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Game-Show",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "History",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Horror",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Music",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Musical",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Mystery",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "News",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Reality-TV",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Romance",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Sci-Fi",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Short",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Sport",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Talk-Show",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Thriller",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "War",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Western",
    href: "/docs/primitives/alert-dialog",
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-between w-[1280px]">
      <div className="flex items-center">
        <img className="w-[16px] h-4" src="movieZ.svg" />
        <p className="text-indigo-700 text-[16px]">MovieZ</p>
      </div>

      <div className="flex">
        <NavigationMenu viewport={true}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap w-[577px] p-4 ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Input placeholder="search"></Input>
      </div>
      <ThemeToggler></ThemeToggler>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex gap-4 border-1 rounded-full pl-2.5 ">
            <div className="text-sm leading-none font-medium">{title}</div>
            <ChevronRight></ChevronRight>
          </div>

          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
