import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Connect, CreateIPFS } from "./components";
import { get } from "./api/ipfs";
import { ABI, ADDRESS } from "./config";
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
    };
    this.registerGrave = this.registerGrave.bind(this);
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

    const bulo = new web3.eth.Contract(ABI, ADDRESS);
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
        //console.log("gravesMap plot");
        gravesMap[parseInt(x,10)][parseInt(y,10)] = { tokenId, uri, data };
      }
      //console.log(data);
      this.setState({
        Graves: [...this.state.Graves, { tokenId, uri, data }],
      });
    }
    // return gravesMap;
    // console.log(gravesMap);
    this.setState({
      GraveMap: gravesMap
    });
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

  render() {
    //console.log("asdf", this.state.GraveMap);
    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <Connect />
        <CreateIPFS registerGrave={this.registerGrave} graves={this.state.GraveMap}/>
        <p>Your account : {this.state.account}</p>
        <p style={{ marginBottom: "30px" }}>
          {this.state.graveCount} people didn't die
        </p>

        {/* {this.state.Graves &&
          this.state.Graves.map((grave) => (
            <div key={grave.tokenId}>
              <p>Graves uri : {grave.uri}</p>
              <p>Graves tokenId : {grave.tokenId}</p>
              <p>Graves data : {grave.data}</p>
            </div>
          ))} */}
      </Web3ReactProvider>
    );
  }
}

export default App;
