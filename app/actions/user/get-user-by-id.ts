"use server";

import { userSchema } from "@/app/dtos/user";
import prisma from "@/prisma/prisma";

export async function getUserById(userId: string | null | undefined) {
  const user = await prisma.user.findUnique({
    include: {
      listings: false,
    },
    where: {
      userId: userId,
    },
  });

  const parsedUser = userSchema.parse(user);
  return parsedUser;
}
