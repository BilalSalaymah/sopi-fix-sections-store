// app/routes/data/index.ts
import { json } from "@remix-run/node";

export const loader = () => {
  return json({ ok: true, message: "Data-root waaerkt!" });
};