import { useState } from "react";
import { create } from "../api/ipfs";
import MassGrave from "./MassGrave";
import { isOccupied } from "../api/grave";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

function Create({ registerGrave, graves, donateTo, graveToOwner, vaultInfoOf }) {
  const [inputs, setInputs] = useState({
    name: "",
    note: "",
    birth: "",
    x: "",
    y: "",
    amount: 0,
  });
  const [selected, setSelected] = useState(null);
  const [vault, setVault] = useState(null);

  const { name, note, birth, x, y, amount } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLocationChange = async (x, y, grave) => {
    if (grave) {
      console.log(grave.data);
      const tokenId = grave.tokenId;
      const address = await graveToOwner(tokenId);
      console.log(address);
      setSelected([...grave.data, address]);
      const vault = await vaultInfoOf(address);
      setVault(vault);
    } else {
      setSelected([null, null, null, x, y]);
    }
    setInputs({
      ...inputs,
      x,
      y,
    });
    // if (isOccupied(x, y, graves)) return alert("해당 위치에 이미 묘지가 존재합니다.");
  };

  const donate = async () => {
    alert(`donate ${selected[5]} ${inputs.amount}`);
    donateTo(selected[5], inputs.amount);
  };

  const post = async () => {
    if (!name || !note || !birth) return alert("모두 입력해주세요");
    if (!x || !y) return alert("묘지를 선택해주세요");
    if (isOccupied(x, y, graves))
      return alert("해당 위치에 이미 묘지가 존재합니다.");
    const { data } = await create(name, note, birth, x, y);
    const { Hash } = data.data;
    console.log(Hash);
    alert(Hash);
    registerGrave(Hash);
  };

  return (
    <div>
      <MassGrave
        onLocationChange={onLocationChange}
        graves={graves}
        x={selected && selected[3]}
        y={selected && selected[4]}
      />
      <div>
        {selected && selected[0] ? (
          <Card variant="outlined">
            <div>🪦 Grave</div>
            name : {selected[0]} <br />
            message: {selected[1]} <br />
            birth: {selected[2]} <br />
            <div>💰 Vault</div>
            address: {selected[5]}
            <div>isActive : {vault?.isActive === true ? "true" : "false"}</div>
            <div>balance : {vault?.balanceOf}</div>
            <div>tokenId : {vault?.tokenId}</div>
            <div>donate target : {vault?.donateTarget}</div>
            <div>lastDonationBlockNumber : {vault?.lastDonationBlockNumber}</div>
            <div>contributors : {vault?.contributors}</div>
            <div>
                <TextField name="amount" value={amount} onChange={onChange} placeholder="amount" />
                <Button variant="outlined" onClick={donate}>donate to this vault</Button>
            </div>
          </Card>
        ) : (
          <Card variant="outlined">
            <div>🌱 Empty</div>
            <div>
              <TextField
                name="name"
                value={name}
                onChange={onChange}
                placeholder="name"
              />
              <TextField
                name="note"
                value={note}
                onChange={onChange}
                placeholder="note"
              />
              <TextField
                name="birth"
                value={birth}
                onChange={onChange}
                placeholder="birth"
              />
              {/* <input style={{visibility:'hidden'}} name="x" value={x} onChange={onChange} placeholder="x" /> */}
              {/* <input style={{visibility:'hidden'}} name="y" value={y} onChange={onChange} placeholder="y" /> */}
              <Button variant="outlined" onClick={post}>
                post{" "}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Create;
