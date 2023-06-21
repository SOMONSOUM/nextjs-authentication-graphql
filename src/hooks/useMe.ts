import { ME_QUERY } from "@/graphql/query";
import { useQuery } from "@apollo/client";

export default function useCurrentUser() {
  return useQuery(ME_QUERY);
}
