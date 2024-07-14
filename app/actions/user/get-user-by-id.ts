"use server";
import { userSchema } from "@/dtos/user";
import prisma from "@/prisma/db";

export async function getUserDataById(userId: number) {
  const user = await prisma.user.findUnique({
    include: {
      listings: false,
    },
    where: {
      id: userId,
    },
  });

  const parsedUser = userSchema.parse(user);
  return parsedUser;
}
