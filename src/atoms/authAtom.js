import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage("authToken", ""); // Stores token in localStorage
