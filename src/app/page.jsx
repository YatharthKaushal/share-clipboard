import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextArea from "@/components/TextArea";
import Background from "@/components/Background";
import { nanoid, customAlphabet } from "nanoid";
import { uniqueid } from "@/app/helpers/uniqueID";
import Clipboard from "@/components/Clipboard";

export default async function Home({ searchParams }) {
  let id = (await searchParams).id;

  return (
    <>
      <Background />
      <Header />
      <Clipboard id={id} />
      {/* <TextArea dynamicLink={id} defaultText="some value from server" /> */}
      {/* <Footer /> */}
    </>
  );
}
