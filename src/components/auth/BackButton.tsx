"use client";

import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <div className="w-full text-center">
      <Link className="hover:underline" href={href}>
        {label}
      </Link>
    </div>
  );
}
