import { Center } from "@mantine/core";
import { useRouter } from "next/router";

const AuthPageLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { locale } = useRouter();
  const dir = locale === "ar" || locale === "he" ? "rtl" : "ltr";

  return (
    <div
      className="flex items-center justify-center h-screen bg-light sm:bg-gray-100"
      dir={dir}
    >
      <div>
        <Center maw={400} h={100} mx="auto">
          <img src="/next.svg" alt="logo" width={200} />
        </Center>
        {children}
      </div>
    </div>
  );
};
export default AuthPageLayout;
