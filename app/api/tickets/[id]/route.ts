import { connectToDB } from "@/app/libs/database";
import Tickets from "@/app/models/tickets";
import { NextRequest } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // id
    const { id } = params;
    // connsct to data "this happent whenever make a request"
    await connectToDB();
    // find the id of the ticket wants to be deleted
    await Tickets.findByIdAndDelete(id);

    // if the id has founded, it will confirm that it has been deleted
    return new Response("Ticked Deleted", { status: 200 });
  } catch (error) {
    // return a fail response if the data coudn't be deleted
    return new Response("Failed to delete the tickets", { status: 500 });
  }
};
