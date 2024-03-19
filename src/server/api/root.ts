import { airtableRouter } from "eufs-finance/server/api/routers/airtable";
import { createTRPCRouter } from "eufs-finance/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  airtable: airtableRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;


