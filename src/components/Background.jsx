import React from "react";
import Image from "next/image";
import { gradientBlueBlue } from "@/assets";

export default function Background() {
  return (
    <div className="absolute -z-10 blur-3xl contrast-200 saturate-200 opacity-10 mx-auto w-screen overflow-x-hidden">
      <Image
        className="mx-auto w-screen rotate90 overflow-x-hidden lg:-mt-56"
        width={"430px"}
        height={"auto"}
        src={gradientBlueBlue}
        alt="gradient background"
      ></Image>
    </div>
  );
}
