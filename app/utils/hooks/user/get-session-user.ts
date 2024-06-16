import { authOptions } from "@/configurations/auth";
import { getServerSession } from "next-auth";

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  if (!session) {
    return undefined;
  }

  return session.user;
}
