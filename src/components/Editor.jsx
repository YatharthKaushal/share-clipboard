"use client";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import rehypePrism from "rehype-prism-plus";
import rehypeRewrite from "rehype-rewrite";
// import "./styles.css";

export default function Editor() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  return (
    <div className=" font-mono">
      <h1>something</h1>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        rehypePlugins={[
          [rehypePrism, { ignoreMissing: true }],
          [
            rehypeRewrite,
            {
              rewrite: (node, index, parent) => {
                if (node.properties?.className?.includes("code-line")) {
                  if (index === 0 && node.properties?.className) {
                    node.properties.className.push("demo01");
                    // console.log("~~~", index, node.properties?.className);
                  }
                }
                if (
                  node.type === "text" &&
                  node.value === "return" &&
                  parent.children.length === 1
                ) {
                  parent.properties.className.push("demo123");
                }
              },
            },
          ],
        ]}
        style={{
          fontSize: 12,
          // backgroundColor: "#f5f5f5",
          fontFamily: "monospace",
        }}
      />
    </div>
  );
}
