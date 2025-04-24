"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../config/web3";

// Fix for multiple initializations
let walletConnectInit = false;

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  // Prevent multiple initializations
  if (typeof window !== "undefined" && !walletConnectInit) {
    walletConnectInit = true;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
