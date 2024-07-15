"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function unsaveListing(userId: number, listingId: number) {
  await prisma.favoriteListing.delete({
    where: {
      userId_listingId: {
        userId,
        listingId,
      },
    },
  });
  revalidatePath("/");
  revalidatePath("/saved");
}
