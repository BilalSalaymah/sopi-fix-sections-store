// app/routes/api/sections.ts
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import prisma from "~/db.server"; // Remix-alias wijst naar app/db.server.ts

export const loader: LoaderFunction = async () => {
  const sections = await prisma.section.findMany();
  return json({ sections });
};