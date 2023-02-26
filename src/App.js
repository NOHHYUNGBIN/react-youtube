import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import DarkModeProvider from "./context/DarkmodeContext";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClint = new QueryClient();

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <YoutubeApiProvider>
          <SearchHeader />
          <QueryClientProvider client={queryClint}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </DarkModeProvider>
    </>
  );
}
