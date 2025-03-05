import { http, createConfig } from "wagmi";
import { bsc, bscTestnet, mainnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, bsc, bscTestnet],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
