"use server";

import { User } from "@/app/dtos";
import prisma from "@/prisma/prisma";

export async function PatchUser(userId: number, userChanges: Partial<User>) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...userChanges,
    },
  });
}
