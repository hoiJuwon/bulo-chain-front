import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Connect } from "./components";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Connect />
    </Web3ReactProvider>
  );
}

export default App;
