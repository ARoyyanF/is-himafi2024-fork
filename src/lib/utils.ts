import { ClassValue, clsx } from "clsx";
import { cache } from "react";
import { twMerge } from "tailwind-merge";

import { QueryClient } from "@tanstack/react-query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getQueryClient = cache(() => new QueryClient());

// CLIENT SIDE METHODS

export async function getUser(nim?: number, take?: number) {
  if (!nim) {
    const result = await fetch("/api/users").then((res) => res.json());
    return result;
  }

  const result = await fetch(`/api/users/${nim}`).then((res) => res.json());

  return result;
}

export async function getContents() {
  const result = await fetch("/api/contents").then((res) => res.json());

  return result;
}

export async function getContentById(id: number) {
  const res = await fetch(`/api/contents/${id}`, {
    method: "GET",
  }).then((res) => res.json());
  return res;
}

export async function updateContentById(id: number, content: string) {
  const res = await fetch(`/api/contents/${id}`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
  return res;
}

// END OF CLIENT SIDE METHODS
// SERVER SIDE METHODS

// END OF SERVER SIDE METHODS
