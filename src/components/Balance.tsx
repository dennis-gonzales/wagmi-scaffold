import { useAccount, useBalance } from "wagmi";
import { config } from "../utils/config";
import { formatUnits } from "viem";

export default function Balance() {
  const { address } = useAccount();

  const { data, isLoading, isError } = useBalance({
    address,
    config,
  });

  if (isLoading) return <div>Loading balance...</div>;
  if (isError) return <div>Error fetching balance.</div>;

  return (
    <div>Balance: {data ? formatUnits(data.value, data.decimals) : "N/A"}</div>
  );
}
