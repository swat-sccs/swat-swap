import { getCurrentUserData } from "@/app/actions";
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
export const useFetchCurrentUserData = () => {
  async function fetchUserFn() {
    return getCurrentUserData();
  }
  return useQuery({
    queryKey: ["profile"],
    queryFn: useCallback(async () => fetchUserFn(), []),
  });
};
