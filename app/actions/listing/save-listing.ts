"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function saveListing(userId: number, listingId: number) {
  await prisma.favoriteListing.create({
    data: {
      userId,
      listingId,
    },
  });
  revalidatePath("/");
}
