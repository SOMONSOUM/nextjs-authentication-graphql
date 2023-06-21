import { LOGIN_MUTATION } from "@/graphql/mutation";
import { useMutation } from "@apollo/client";

export default function useLogin() {
  return useMutation(LOGIN_MUTATION);
}
