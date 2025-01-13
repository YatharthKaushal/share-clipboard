"use client";
import { useSearchParams } from "next/navigation";
import { copySVG, shareSVG } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useRef } from "react";
import Clipboard from "clipboard";
import copyToClipboard from "copy-to-clipboard";
import toast from "react-hot-toast";
import { addText } from "@/app/actions";
import { customToast } from "@/app/helpers/customToast";

export default function TextArea({ dynamicLink, defaultText }) {
  const searchParams = useSearchParams();
  const myParam = searchParams.get("search");

  useEffect(() => {
    // console.log("> dynamicLink: ", dynamicLink);
    if (!myParam) {
      // console.log("> no paramas");
      return;
    }
    // console.log("> search param: ", myParam);
  }, []);

  const [text, setText] = useState(defaultText || "");
  const prevText = useRef(text);

  const handleCopy = (textcopied, type) => {
    if (!text) {
      return customToast("cliboard can't be left empty!", "❗");
    }

    if (type === "TEXT") {
      copyToClipboard(textcopied);
      customToast("text copied!!", "✅");
    } else if (type === "LINK") {
      saveText(text);
      customToast("link valid for 24h.", "🔗");
      copyToClipboard(`http://localhost:3000/?id=${textcopied}`);
    } else {
      customToast("something went wrong!!", "❗");
    }
  };

  const saveText = () => {
    if (text !== prevText.current) {
      addText(text, dynamicLink);
      toast.success("text saved");
      prevText.current = text;
      return;
    }
    // customToast("not changed", "❗");
    // addText(text, dynamicLink);
  };

  return (
    <>
      <div className="flex flex-col w-full h-full mx-auto">
        {/* <div className="bg-color-8 w-[90%] md:w-[60%] mx-auto rounded-t-md px-4 pt-2 border-b border-color-8/50 backdrop-blur-sm font-light flex gap-2">
          char:<span className="text-color-5 borderr pr-2">0</span>
          words:<span className="text-color-5 borderr pr-2">0</span>
          lines:<span className="text-color-5 borderr pr-2">0</span>
          char:<span className="text-color-5 borderr pr-2">0</span>
        </div> */}
        <textarea
          onChange={(event) => setText(event.target.value)}
          defaultValue={text}
          autoComplete="off"
          autoFocus={true}
          wrap="hard"
          placeholder="Paste Here!!!"
          className="w-[90%] mb-4 md:w-[60%] h-[70svh] mx-auto rounded-md p-4 drop-shadow-lg backdrop-blur-sm text-color-5 focus:outline-none font-mono"
        />

        <div className="w-[90%] md:w-[60%] mx-auto flex flex-col sm:flex-row gap-4">
          <button
            className="bg-green-700 rounded-md px-2 text-color-7 h-10"
            onClick={() => handleCopy(text, "TEXT")}
          >
            <div className="flex mx-auto gap-2 text-center">
              <span className="bg-red-5 flex ml-auto">
                <Image src={copySVG} alt="share icon" width={18} height={18} />
              </span>
              <span className="mr-auto">COPY TEXT</span>
            </div>
          </button>

          <div className="bg-color-8 rounded-md flex">
            <button
              className="bg-indigo-700 mx-auto rounded-l-md p-2 text-color-7 min-w-[9rem] h-10"
              onClick={() => handleCopy(dynamicLink, "LINK")}
            >
              <div className="flex my-auto gap-2">
                <span className="bg-red-5 flex">
                  <Image
                    src={shareSVG}
                    alt="share icon"
                    width={18}
                    height={18}
                  />
                </span>
                <span>SHARE LINK</span>
              </div>
            </button>
            <span className="px-2 my-auto truncate">
              {`shareclipboard.vercel.app/?id=${dynamicLink}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
