import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export default function Transaction() {
  const { sendTransaction } = useSendTransaction();

  return (
    <button
      onClick={() =>
        sendTransaction({
          to: "0xf18E27DD6DC5046Ae57Ce5632A14001b9324AfFb",
          value: parseEther("0.001"),
        })
      }
    >
      Send transaction
    </button>
  );
}
