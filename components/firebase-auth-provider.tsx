"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const FirebaseAuthProider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  useEffect(() => {}, [session]);

  return <>{children}</>;
};
