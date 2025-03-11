import { useSendTransaction } from "wagmi";
import { parseUnits } from "viem";

export default function Transaction() {
  const { sendTransaction } = useSendTransaction();

  return (
    <button
      onClick={() =>
        sendTransaction({
          to: "0xf18E27DD6DC5046Ae57Ce5632A14001b9324AfFb",
          value: parseUnits("0.001", 18),
        })
      }
    >
      Send transaction
    </button>
  );
}
