import { connectToDB } from "@/app/libs/database/database";
import Tickets from "@/app/models/tickets";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  // the post request from the form
  const formData = await req.json();

  try {
    // connsct to data "this happent whenever make a request"
    await connectToDB();
    // add the request to database
    const newTicket = new Tickets(formData);
    // save it
    await newTicket.save();

    // return a response to confirm that data hase been added
    return new Response(JSON.stringify(newTicket), { status: 201 });
  } catch (error) {
    // return a fail response if there the data wasn't added
    return new Response("Failed to create a Ticket", { status: 500 });
  }
};
