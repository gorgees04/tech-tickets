import { connectToDB } from "@/app/libs/database/database";
import Tickets from "@/app/models/tickets";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // connsct to data "this happent whenever make a request"
    await connectToDB();
    // get all the data
    const tickets = await Tickets.find();

    // return a response to confirm that data hase been added
    return new Response(JSON.stringify(tickets), { status: 200 });
  } catch (error) {
    // return a fail response if the data haven't fetched
    return new Response("Failed to fetch the tickets", { status: 500 });
  }
};
