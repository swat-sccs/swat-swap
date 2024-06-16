"use server";

import prisma from "@/prisma/prisma";

// check if there is a user entry in the database with the provided keycloak id, if not create a new user
export async function findOrCreateUser(keycloakId: string) {
  const existingUser = await prisma.user.findUnique({
    where: {
      keycloakId,
    },
  });

  if (existingUser) {
    return existingUser.id;
  } else {
    const newUser = await prisma.user.create({
      data: {
        name: "",
        email: "",
        keycloakId: keycloakId,
      },
    });
    return newUser.id;
  }
}
