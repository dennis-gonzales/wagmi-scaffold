import "@rainbow-me/rainbowkit/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./utils/config";
import { WagmiProvider } from "wagmi";
import Chain from "./components/Chain";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import ChainSelector from "./components/ChainSelector";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton />
          {/* <ConnectWallet /> */}
          <Chain />
          <Balance />
          <Transaction />

          <br />
          <br />
          <br />
          <br />
          <br />

          <h1>Custom Chain Selector</h1>
          <ChainSelector />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
