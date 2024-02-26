"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import type { ChildrenProps } from "../../types/types";

function Provider({ children }: ChildrenProps) {
  const [hydration, setHydration] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      {hydration ? <>{children}</> : <></>}
    </ThemeProvider>
  );
}

export default Provider;
