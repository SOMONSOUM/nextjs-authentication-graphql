import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import AppLayout from "@/component/Layouts/AppLayout";
import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import { useMe } from "@/context/me.context";

const AdminDashboard = dynamic(() => import("@/component/AdminDashboard"));

export default function Dashboard() {
  const { me } = useMe()
  console.log(me);

  return <AdminDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = getAuthCredentials(ctx);
  if (!isAuthenticated({ token })) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
