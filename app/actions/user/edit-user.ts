"use server";

import { User } from "@/dtos";
import prisma from "@/prisma/db";

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
