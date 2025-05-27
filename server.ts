import express from "express";
import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import { startGraphQLServer } from "./app/graphql/server";

installGlobals();

async function main() {
    try {
      const app = express();
  
      await startGraphQLServer(app);
  
      let build;
      try {
        build = await import("./build");
      } catch (err) {
        console.error("❌ Kan './build' niet importeren. Run eerst: npm run build");
        console.error(err);
        return;
      }
  
      app.use(
        "*",
        createRequestHandler({
          build,
          mode: process.env.NODE_ENV,
        })
      );
  
      app.listen(3000, () => {
        console.log("✅ Server gestart op http://localhost:3000");
      });
    } catch (err) {
      console.error("❌ Fout tijdens server start:", err);
    }
  }
  

main();
