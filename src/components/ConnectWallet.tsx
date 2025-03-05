import { useAccount, useConnect } from "wagmi";

export default function HelloWorld() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { connectors, connect } = useConnect();

  if (isDisconnected) {
    return connectors.map((connector) => (
      <button key={connector.uid} onClick={() => connect({ connector })}>
        Connect {connector.name}
      </button>
    ));
  }

  if (isConnecting) {
    return <div>Connecting...</div>;
  }

  return <div>Wallet Address: {address}</div>;
}
