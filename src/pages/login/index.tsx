import { GetServerSideProps } from "next";
import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import { LoginForm } from "@/component/LoginForm";
import AuthPageLayout from "@/component/Layouts/AuthLayout";

export default function LoginPage() {
  return <LoginForm />
}

LoginPage.Layout = AuthPageLayout

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = getAuthCredentials(ctx);
  if (isAuthenticated({ token })) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
