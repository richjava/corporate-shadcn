"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";

interface HeaderContent {
  data?: {
    links?: Array<{ label: string; href: string }>;
  };
  global?: {
    name?: string;
    logo?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export default function Header1({ content }: { content?: HeaderContent }) {
  const { data, global } = content || {};
  const links = data?.links || [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          {global?.logo ? (
            <Image
              src={global.logo.url}
              alt={global.name || "Logo"}
              width={widthForImage(global.logo)}
              height={heightForImage(global.logo)}
            />
          ) : (
            <Building2 className="h-6 w-6" />
          )}
          <span className="text-xl font-bold">{global?.name || "Corporate ShadCN"}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}