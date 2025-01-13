import { logoSVG } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex gap-2 font-bold text-2xl p-4">
        <Image src={logoSVG} alt="LOGO" width={20} />
        <span>CLIPBOARD SHARE</span>
      </div>
      <div className="hidden sm:block w-[90%] md:w-[60%] mx-auto rounded-sm mb-2 px-2 drop-shadow-lg backdrop-blur-sm text-color-5 focus:outline-none font-mono text-sm border-l-2 border-color-5">
        Share Clipboard is a simple tool to share text effortlessly. Paste your
        text, get a sharable link, and share it with anyone. Links are valid for
        24 hours. Ideal for code snippets, quick notes, or text sharing.
        Simplify your sharing today!
      </div>
    </>
  );
}
