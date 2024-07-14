import { getSessionUser } from "./get-session-user";

export async function getSessionUserId() {
  const user = await getSessionUser();
  return user ? Number(user.id) : undefined;
}
