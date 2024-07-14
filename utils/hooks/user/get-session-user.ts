import { authOptions } from "@/config/auth";
import { type Session, getServerSession } from "next-auth";

export const getSessionUser = async (): Promise<
  Session["user"] | undefined
> => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return undefined;
  }

  return session.user;
};
