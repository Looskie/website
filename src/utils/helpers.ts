import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export async function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then(async (res) => res.json());
}
