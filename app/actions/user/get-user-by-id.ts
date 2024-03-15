"use server";

import { getUserSchema } from "@/app/dtos/user";
import prisma from "@/prisma/prisma";

export async function getUserById(userId: number) {
  const user = await prisma.user.findUnique({
    include: {
      listings: false,
    },
    where: {
      id: userId,
    },
  });

  const parsedUser = getUserSchema.parse(user);
  return parsedUser;
}
