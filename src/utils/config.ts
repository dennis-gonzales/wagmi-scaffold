import { http } from "wagmi";
import {
  arbitrum,
  arbitrumGoerli,
  bsc,
  bscTestnet,
  mainnet as ethereum,
  polygon,
  polygonMumbai,
  sepolia,
} from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

const isProduction = false;

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: isProduction
    ? [ethereum, bsc, polygon, arbitrum]
    : [sepolia, bscTestnet, polygonMumbai, arbitrumGoerli],
  transports: {
    [ethereum.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumGoerli.id]: http(),
  },
});
