import React from "react";
import logoImage from "@/public/images/logo.svg";
import searchImage from "@/public/images/search.svg";
import menuImage from "@/public/images/menu.svg";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

interface Link {
  name: string;
  url: string;
}

function Header() {
  const links: Link[] = [
    { name: "Movies", url: "/" },
    { name: "Stream", url: "/about" },
    { name: "Events", url: "/contact" },
    { name: "Plays", url: "/contact" },
    { name: "Sports", url: "/contact" },
    { name: "Activites", url: "/contact" },
  ];
  return (
    <header className="flex flex-col">
      <div className="w-full  h-[64px] items-center justify-center flex">
        <div className="container py-4 flex gap-8 justify-between">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <Image src={logoImage} alt="logo" />
            </Link>
            <div className="flex bg-white px-4 min-w-[400px] border-gray-300 border-[1px] rounded-sm">
              <Image src={searchImage} alt="logo" />
              <Input
                placeholder="Search"
                className="bg-transparent border-none shadow-none"
              />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Button className="bg-showRed">Sign in</Button>

            <Button className="bg-transparent">
              <Image src={menuImage} alt="Menu Button" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-lightGray border-showBorder border-b-[1px] h-[40px] flex items-center">
        <div className="container flex justify-between text-sm">
          <div className="flex gap-4 items-center">
            {links.map((link, index) => (
              <>
                <Link key={index} href={link.url}>
                  {link.name}
                </Link>
              </>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            {links.map((link, index) => (
              <>
                <Link key={index} href={link.url}>
                  {link.name}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
