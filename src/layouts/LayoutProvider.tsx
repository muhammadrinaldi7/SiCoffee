"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="scroll-smooth">{children}</div>
      </QueryClientProvider>
    </>
  );
}
