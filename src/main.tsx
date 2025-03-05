import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConnectWallet from "./components/ConnectWallet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./utils/config";
import { WagmiProvider } from "wagmi";
import Chain from "./components/Chain";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        <Chain />
        <Balance />
        <Transaction />
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
