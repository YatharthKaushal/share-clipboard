"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addText(text, id) {
  // console.log(">text | id: ", text, id);
  try {
    const result = await prisma.clipboard.upsert({
      where: { url: id },
      update: { text },
      create: { text, url: id },
    });
    return { res: result };
  } catch (error) {
    // console.log("> Error in upserting text:", error);
    return { res: null };
  }
  // try {
  //   const result = await prisma.clipboard.create({
  //     data: {
  //       text,
  //       url: id,
  //     },
  //   });
  //   return result;
  // } catch (error) {
  //   console.error("Error adding text: ", error);
  //   throw new Error("Unable to add text");
  // }
}

export async function getText(id) {
  let res = { result: null };
  try {
    const result = await prisma.clipboard.findUnique({
      where: { url: id },
    });
    if (!result) {
      // throw new Error("Text not found");
      // console.log("> Text not found");
      return res;
    }
    return (res = { result });
  } catch (error) {
    // console.log("> Error fetching text: ", error);
    // throw new Error("Unable to fetch text");
  }
}

export async function removeText(id) {
  try {
    const result = await prisma.clipboard.delete({
      where: { url: id },
    });
    return result;
  } catch (error) {
    // console.error("Error removing text: ", error);
    throw new Error("Unable to remove text");
  }
}
