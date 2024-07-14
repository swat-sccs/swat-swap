"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function favoriteListing(userId: number, listingId: number) {
  await prisma.favoriteListing.create({
    data: {
      userId,
      listingId,
    },
  });
  revalidatePath("/");
}
