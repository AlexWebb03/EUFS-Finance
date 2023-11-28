import Airtable from "airtable";

import { createTRPCRouter, publicProcedure } from "eufs-finance/server/api/trpc";

import { env } from "src/env.mjs"

import * as dotenv from 'dotenv';
dotenv.config();

const base = new Airtable({apiKey: env.AIRTABLE_API_KEY}).base(env.AIRTABLE_BASE_ID);


export const airtableRouter = createTRPCRouter({
  requests: publicProcedure
    .query( () => {
         
      base('Requests').select({
          // Selecting the first 3 records in Table:
          maxRecords: 3,
          view: "Table"
      }).eachPage((records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.

          records.forEach(function(record) {
              console.log('Retrieved', record.get('ID'));
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
      }, function done(err) {
          if (err) { console.error(err); }
      });

      return "value";
    }),
});
