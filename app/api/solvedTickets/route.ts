import { connectToDB } from "@/app/libs/database";
import SolvedTickets from "@/app/models/solvedTickets";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // connsct to data "this happent whenever make a request"
    await connectToDB();
    // get all the data
    const solvedtickets = await SolvedTickets.find();

    // return a response of all data
    return new Response(JSON.stringify(solvedtickets), { status: 200 });
  } catch (error) {
    // return a fail response if the data haven't founded
    return new Response("Failed to fetch the solved tickets", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  // the post request from the ticket that has been changed to solved
  const ticketData = await req.json();

  try {
    // connsct to data "this happent whenever make a request"
    await connectToDB();
    // add the request to database
    const newSolvedTicket = new SolvedTicketsTickets(ticketData);
    // save it
    await newSolvedTicket.save();

    // return a response to confirm that data hase been added
    return new Response(JSON.stringify(newSolvedTicket), { status: 201 });
  } catch (error) {
    // return a fail response if there the data wasn't added
    return new Response("Failed to create a solved Ticket", { status: 500 });
  }
};
