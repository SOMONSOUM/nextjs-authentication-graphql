import { setAuthCredentials } from "@/apollo/auth-utils";
import useLogin from "@/hooks/userLogin";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useRef } from "react";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const email = useRef("");
  const password = useRef("");
  const [visible, { toggle }] = useDisclosure(false);
  const [login] = useLogin();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      variables: {
        input: {
          email: email.current,
          password: password.current,
        },
      },
      onCompleted: ({ loginUser }: { loginUser: string }) => {
        setAuthCredentials(loginUser);
        router.push("/");
        return;
      },
    });
  };

  return (
    <Stack maw={380} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Your Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (email.current = e.target.value)}
        />
        <PasswordInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (password.current = e.target.value)}
          label="Password"
          visible={visible}
          onVisibilityChange={toggle}
          placeholder="Your Password"
        />
        <Button type="submit" mt="md">
          Login
        </Button>
      </form>
    </Stack>
  );
};
