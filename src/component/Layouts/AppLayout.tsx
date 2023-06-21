import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("./admin"));

export default function AppLayout({
  userPermissions,
  ...props
}: {
  userPermissions: string[];
}) {
  return <AdminLayout {...props} />;
}
