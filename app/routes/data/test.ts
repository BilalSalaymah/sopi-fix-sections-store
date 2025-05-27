// app/routes/api/test.ts
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ ok: true, message: "API-test werkt!" });
};