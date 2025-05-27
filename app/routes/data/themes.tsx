import { json } from "@remix-run/node";
import { authenticate } from "../../shopify.server"; // let op: RELATIEF pad

export const loader = async ({ request }: { request: Request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.rest.get({
    path: "/themes",
  });

  return json({ themes: response?.body?.themes ?? [] });
};
