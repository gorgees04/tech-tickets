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

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // id
    const { id } = params;
    // connsct to data "this happent whenever make a request"
    await connectToDB();

    // find the ticket by id
    const ticketById = await Tickets.findById(id);

    // chack if the id doesn't excist, it will return 404
    if (!ticketById) {
      return new Response("Ticket not found", { status: 404 });
    }

    // get data of the id if founded
    return new Response(JSON.stringify(ticketById), { status: 200 });
  } catch (error) {
    // return a fail response if the data wasn't founded
    return new Response("Failed to find the ticket", { status: 500 });
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // get the request data
    const { title, description, category, priority, progress, status } =
      await req.json();

    // connsct to data "this happent whenever make a request"
    await connectToDB();

    // find ticket by id
    const { id } = params;
    let ticketById = await Tickets.findById(id);

    // chack if the id doesn't excist, it will return 404
    if (!ticketById) {
      return new Response("Ticket not found", { status: 404 });
    }

    // update the ticket with changes
    title ? (ticketById.title = title) : ticketById.title;
    description
      ? (ticketById.description = description)
      : ticketById.description;
    category ? (ticketById.category = category) : ticketById.category;
    priority ? (ticketById.priority = priority) : ticketById.priority;
    progress ? (ticketById.progress = progress) : ticketById.progress;
    status ? (ticketById.status = status) : ticketById.status;

    // save the changes in database
    await ticketById.save();

    // if the id has founded, it will confirm that it has been edited
    return new Response(JSON.stringify(ticketById), { status: 200 });
  } catch (error) {
    // return a fail response if the data coudn't be deleted
    return new Response("Failed to edit the tickets", { status: 500 });
  }
};
