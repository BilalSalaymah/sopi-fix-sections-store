// app/routes/data/sections.ts
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import prisma from "~/db.server";

export const loader: LoaderFunction = async () => {
  const sections = await prisma.section.findMany();
  return json({ sections });
};