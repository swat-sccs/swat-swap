"use server";
import { userSchema } from "@/dtos/user";
import prisma from "@/prisma/db";
import { getSessionUserId } from "@/utils/hooks";

export async function getCurrentUserData() {
  const userId = await getSessionUserId();

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
