import React from "react";
import { uniqueid } from "@/app/helpers/uniqueID";
import TextArea from "@/components/TextArea";
import { getText } from "@/app/actions";

export default async function Clipboard({ id }) {
  // let id = (await searchParams).id;
  let defaultText = "";

  if (!id) {
    // generating unique id (for new user)
    id = uniqueid();
    // TODO: now checking if new id already exist in db
    // console.log("> id not in url, generated new: ", id);
  } else {
    // console.log("> id in search params:", id);
    // getting the text using `id` from db
    const { result } = await getText(id);
    // console.log("> (Clipboard.jsx) getText result: ", result);
    result ? (defaultText = result.text) : defaultText;
  }

  return (
    <>
      <TextArea dynamicLink={id} defaultText={defaultText} />
    </>
  );
}
