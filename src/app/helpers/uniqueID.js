import { nanoid, customAlphabet } from "nanoid";

const alphanumeric =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export const uniqueid = customAlphabet(alphanumeric, 10);
