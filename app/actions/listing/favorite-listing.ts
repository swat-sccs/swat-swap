"use server";

import prisma from "@/prisma/prisma";
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
