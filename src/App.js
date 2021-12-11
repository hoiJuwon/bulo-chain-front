import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Connect, CreateIPFS, Grave } from "./components";
import { get } from "./api/ipfs";
import { BULO_ABI, BULO_ADDRESS } from "./buloConfig";
import { VAULT_ABI, VAULT_ADDRESS } from "./vaultConfig";
import React, { Component } from "react";

function getLibrary(provider) {
  return new Web3(provider);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      graveCount: 0,
      Graves: [],
      GraveMap: Array.from(Array(10), () => new Array(10).fill(0)),
      loading: true,
      myGrave: []
    };
    this.registerGrave = this.registerGrave.bind(this);
    this.createVault = this.createVault.bind(this);
    this.updateDonateTarget = this.updateDonateTarget.bind(this);
    this.donateTo = this.donateTo.bind(this);
  }

  async componentDidMount() {
    this.loadBlockchainData();
  }


  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:", network);
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const bulo = new web3.eth.Contract(BULO_ABI, BULO_ADDRESS);
    this.setState({ bulo });
    const graveCount = await bulo.methods.graveCount().call();
    this.setState({ graveCount });

    const gravesMap = Array.from(Array(11), () => new Array(11).fill(0));
    
    for (var i = 0; i < graveCount; i++) {
      const grave = await bulo.methods.Graves(i).call();
      const { uri, tokenId } = grave;
      const data = await get(uri);
      const [x, y] = [data[3], data[4]];
      if(x!==undefined && y!==undefined) {
        gravesMap[parseInt(x,10)][parseInt(y,10)] = { tokenId, uri, data };
      }
      this.setState({
        Graves: [...this.state.Graves, { tokenId, uri, data }],
      });
    }
    this.setState({
      GraveMap: gravesMap
    });

    const { uri: myUri, tokenId: myTokenId } = await bulo.methods.graveInfoOf(accounts[0]).call();
    const myData = await get(myUri);
    console.log(myData);
    console.log(myTokenId);
    this.setState({myGrave: [...myData, myTokenId]});
  
    const vault = new web3.eth.Contract(VAULT_ABI, VAULT_ADDRESS);
    this.setState({ vault });
    console.log(this.state.vault);

    const vaultInfo = await vault.methods.vaultInfoOf(accounts[0]).call();
    console.log(vaultInfo);
    this.setState({myVault: vaultInfo});

  }

  registerGrave(content) {
    this.setState({ loading: true });
    this.state.bulo.methods
      .registerGrave(content)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  createVault(tokenId_, vaultOwner_, donateTarget_) {
    console.log(tokenId_, vaultOwner_, donateTarget_);
    this.setState({ loading: true });
    this.state.vault.methods
      .createVault(tokenId_, vaultOwner_, donateTarget_)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  updateDonateTarget(vaultOwner_, donateTarget_) {
    this.setState({ loading: true });
    this.state.vault.methods
      .updateDonateTarget(vaultOwner_, donateTarget_)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  donateTo(vaultOwner_, amount) {
    this.setState({ loading: true });
    this.state.vault.methods
      .donateTo(vaultOwner_, amount)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <Connect />
        <CreateIPFS registerGrave={this.registerGrave} graves={this.state.GraveMap}/>
        <p>Your account : {this.state.account}</p>
        <p style={{ marginBottom: "30px" }}>
          {this.state.graveCount} people didn't die
        </p>
        <Grave info={this.state.myGrave} vault={this.state.myVault} myAddress={this.state.account} createVault={this.createVault} updateDonateTarget={this.updateDonateTarget} donateTo={this.donateTo}/>
      </Web3ReactProvider>
    );
  }
}

export default App;
