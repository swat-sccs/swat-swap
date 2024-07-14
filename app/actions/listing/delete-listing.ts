"use server";
import prisma from "@/prisma/db";
import { redirect } from "next/navigation";

export async function deleteListing(listingId: number) {
  await prisma.listing.delete({
    where: {
      id: listingId,
    },
  });
  redirect("/");
}
