import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// This should be your actual WalletConnect project ID gotten from cloud.reown.com formerly cloud.walletconnect.com
const PROJECT_ID = "73a96bd08a4509491528af0da1023254";

export const config = getDefaultConfig({
  appName: "DoggoCoin Presale",
  projectId: PROJECT_ID,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http("https://rpc.sepolia.org"),
  },
  ssr: false, // Set to true if using Next.js with SSR
});
