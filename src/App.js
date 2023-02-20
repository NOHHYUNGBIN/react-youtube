import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

const queryClint = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClint}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
