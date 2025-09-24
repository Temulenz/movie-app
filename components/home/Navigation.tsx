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
import { getGenremovies } from "@/utilis/get-data";
import { Key } from "react";
import { SearchSection } from "../main/SearchSection";

const components: { title: string; href: string }[] = [];

export async function NavigationMenuDemo() {
  const Genrelist = await getGenremovies();
  console.log("fbnfdjbdfdmkbdfk", Genrelist);
  return (
    <div className="flex justify-between w-[1280px]">
      <Link href={`/`}>
        {" "}
        <div className="flex items-center">
          <img className="w-[16px] h-4" src="/movieZ.svg" />
          <p className="text-indigo-700 text-[16px]">MovieZ</p>
        </div>
      </Link>

      <div className="flex ">
        <NavigationMenu viewport={true}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap w-[577px] p-4 ">
                  {Genrelist.genres.map(
                    (genre: {
                      id: Key | null | undefined;
                      name: string | undefined;
                    }) => (
                      <ListItem
                        key={genre.id}
                        title={genre.name}
                        href={`/genre?id=${genre.id}?name=${genre.name}`}
                      ></ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SearchSection></SearchSection>
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
