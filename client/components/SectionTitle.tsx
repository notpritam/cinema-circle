import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  title: string;
  link?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
}

function SectionTitle({
  title,
  link,
  linkText,
  children,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("flex justify-between w-full items-center", className)}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {link && linkText && (
        <Link className="text-showRed" href={link}>
          {linkText}
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;
