import React from "react";
import { useRouter } from "next/router";
import { getAuthCredentials } from "./auth-utils";
import { Loader } from "@mantine/core";

interface PrivateRouteProps {
  authProps?: any;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const { token } = getAuthCredentials();
  const isUser = !!token;

  React.useEffect(() => {
    if (!isUser) router.replace("/login"); // If not authenticated, force log in
  }, [isUser]);

  if (isUser) {
    return <>{children}</>;
  }

  //TODO is user has no accessibility or no permission
  if (isUser) {
    return <>Access Denied</>;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loader variant="dots" />;
};

export default PrivateRoute;
