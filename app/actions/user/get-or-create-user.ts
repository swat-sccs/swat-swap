"use server";
import { CreateUserPayload } from "@/dtos/user";
import prisma from "@/prisma/db";

export async function getOrCreateUser(createUserPayload: CreateUserPayload) {
  const existingUser = await prisma.user.findUnique({
    where: {
      keycloakId: createUserPayload.keycloakId,
    },
  });

  if (existingUser) {
    return existingUser.id;
  } else {
    const newUser = await prisma.user.create({
      data: createUserPayload,
    });
    return newUser.id;
  }
}
