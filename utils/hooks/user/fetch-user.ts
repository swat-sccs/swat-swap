import { getUserDataById } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

/**
 *
 * @param userId
 * @returns
 *
 * @description
 * This hook is to only be used client side as a way to fetch user data by id
 */
export const useFetchUser = (userId: number) => {
  async function fetchUserFn(userId: number) {
    return getUserDataById(userId);
  }
  return useQuery({
    queryKey: ["user", userId],
    queryFn: useCallback(async () => fetchUserFn(userId!), [userId]),
  });
};
