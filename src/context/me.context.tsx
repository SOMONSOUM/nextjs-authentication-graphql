import useCurrentUser from "@/hooks/useMe";
import { Me } from "@/types/MeType";
import { Loader } from "@mantine/core";
import { PropsWithChildren, createContext, useContext } from "react";

const MeContext = createContext<{ me?: Me | null }>({})

export function useMe() {
  return useContext(MeContext)
}

export function MeProvider(props: PropsWithChildren<unknown>) {
  const { data, loading } = useCurrentUser()

  if (!data || loading) return <Loader variant="dots" />
  // console.log("Me", data);

  return (
    <MeContext.Provider value={{ me: data?.me }}>
      {props.children}
    </MeContext.Provider>
  )
}