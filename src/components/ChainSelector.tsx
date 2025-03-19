import { useChainModal } from "@rainbow-me/rainbowkit";

// https://www.rainbowkit.com/docs/modal-hooks
export default function ChainSelector() {
  const { openChainModal } = useChainModal();

  return (
    <button onClick={openChainModal} type="button">
      Open Chain Modal
    </button>
  );
}
