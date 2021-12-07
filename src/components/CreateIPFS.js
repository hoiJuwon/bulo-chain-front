import { useState } from "react";
import { create } from "../api/ipfs";
import MassGrave from "./MassGrave";
import { GraveInfo } from ".";

function CreateIPFS({registerGrave, graves}) {
  const [inputs, setInputs] = useState({
    name: "",
    note: "",
    birth: "",
    x: "",
    y: "",
  });
  const [selected, setSelected] = useState();

  const { name, note, birth, x, y } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLocationChange = (x, y, grave) => {
    if(grave) {
      console.log("set selected", grave.data);
      setSelected(grave.data);
      console.log(selected);
    }
    setInputs({
      ...inputs,
      x: x,
      y: y,
    });
  };

  const postIpfs = async () => {
    if (!name || !note || !birth || !x || !y) return alert("모두 입력해주세요");
    // if (isOccupied({ x, y, graves }) === true)
    //   return alert("해당 위치에 이미 묘지가 존재합니다.");
    const { data } = await create(name, note, birth, x, y);
    const { Hash } = data.data;
    console.log(Hash);
    alert(Hash);
    registerGrave(Hash);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} placeholder="name" />
      <input name="note" value={note} onChange={onChange} placeholder="note" />
      <input
        name="birth"
        value={birth}
        onChange={onChange}
        placeholder="birth"
      />
      <input name="x" value={x} onChange={onChange} placeholder="x" />
      <input name="y" value={y} onChange={onChange} placeholder="y" />
      <button onClick={postIpfs}>post </button>
      <MassGrave onLocationChange={onLocationChange} graves={graves}/>
      <GraveInfo grave={selected}/>
    </div>
  );
}

export default CreateIPFS;
