import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Connect, CreateIPFS } from "./components";
import { ABI, ADDRESS } from "./config";
import React, { Component } from "react";

function getLibrary(provider) {
  return new Web3(provider);
}
class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log("network:",network)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const bulo = new web3.eth.Contract(ABI, ADDRESS)
    this.setState({ bulo })
    const graveCount = await bulo.methods.graveCount().call()
    this.setState({ graveCount })
    for (var i = 0; i < graveCount; i++) {
      const grave = await bulo.methods.Graves(i).call()
      const {uri, tokenId} = grave;

      this.setState({
        Graves: [...this.state.Graves, {tokenId, uri}]
      })
    }
  }

    constructor(props) {
      super(props)
      this.state = {
        account: '',
        graveCount: 0,
        Graves: [],
        loading: true,
      }
      this.registerGrave = this.registerGrave.bind(this)
}
registerGrave(content) {
  this.setState({ loading: true })
  this.state.bulo.methods.registerGrave(content).send({ from: this.state.account })
  .once('receipt', (receipt) => {
    this.setState({ loading: false })
  })
}


  render() {
    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <Connect />
        <CreateIPFS registerGrave={this.registerGrave}/>
          <p>Your account : {this.state.account}</p>
          <p style={{marginBottom:"30px"}}>Graves count : {this.state.graveCount}</p>

          {this.state.Graves && this.state.Graves.map((grave)=>(
            <div key={grave.tokenId}>
              <p>Graves uri : {grave.uri}</p>
              <p>Graves tokenId : {grave.tokenId}</p>
            </div>
          ))}
      </Web3ReactProvider>
    );
  }
}

export default App;
