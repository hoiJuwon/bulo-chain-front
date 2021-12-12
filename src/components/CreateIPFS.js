import { useState } from "react";
import { create } from "../api/ipfs";
import MassGrave from "./MassGrave";
import { isOccupied } from "../api/grave";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

function Create({ registerGrave, graves }) {
  const [inputs, setInputs] = useState({
    name: "",
    note: "",
    birth: "",
    x: "",
    y: "",
  });
  const [selected, setSelected] = useState(null);

  const { name, note, birth, x, y } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLocationChange = (x, y, grave) => {
    if (grave) {
      console.log(grave.data);
      setSelected(grave.data);
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
