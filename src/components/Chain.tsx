import { useChainId } from "wagmi";
import { getChain } from "../utils/chain";

export default function Chain() {
  const chainId = useChainId();

  return <div>Chain ID: {getChain(chainId).name}</div>;
}
