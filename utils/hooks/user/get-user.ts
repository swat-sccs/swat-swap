import { getUserById } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export function useGetBareUserById(userId: number) {
  async function fetchBareUserByIdFn(userId: number) {
    return getUserById(userId);
  }
  return useQuery({
    queryKey: ["user", userId],
    queryFn: useCallback(async () => fetchBareUserByIdFn(userId), [userId]),
  });
}
