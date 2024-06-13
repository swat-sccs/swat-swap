"use server";

import prisma from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function unfavoriteListing(userId: number, listingId: number) {
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
