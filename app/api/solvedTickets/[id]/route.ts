import { connectToDB } from "@/app/libs/database";
import SolvedTickets from "@/app/models/solvedTickets";
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
    await SolvedTickets.findByIdAndDelete(id);

    // if the id has founded, it will confirm that it has been deleted
    return new Response("Solved Ticked Deleted", { status: 200 });
  } catch (error) {
    // return a fail response if the data coudn't be deleted
    return new Response("Failed to delete the solved tickets", { status: 500 });
  }
};
