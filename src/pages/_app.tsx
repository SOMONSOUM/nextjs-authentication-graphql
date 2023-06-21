import { useApollo } from "@/apollo/apollo";
import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from '@mantine/core';
import type { AppProps } from "next/app";

type NoopProps = {
  children?: React.ReactNode
}

const Noop: React.FC<NoopProps> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const Layout = (Component as any).Layout || Noop;

  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ApolloProvider>
  );
}
