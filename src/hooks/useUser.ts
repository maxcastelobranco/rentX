import useSWR from "swr";

import { fetcher } from "../services/api";
import { User } from "../context/reducers/authenticationReducer";

export const useUser = (id: string) => {
  const { data: user, error } = useSWR<User>(`users/${id}`, fetcher);

  return {
    user,
    error,
    isLoading: !user && !error,
  };
};
