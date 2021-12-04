import { useState } from "react";
import { create } from "../api/ipfs";

function CreateIPFS() {
  const [inputs, setInputs] = useState({
    name: "",
    note: "",
    birth: "",
  });

  const { name, note, birth } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const postIpfs = async () => {
    if (!name || !note || !birth) return alert("모두 입력해주세요");
    const { data } = await create(name, note, birth);
    const { Hash } = data.data;
    console.log(Hash);
    alert(Hash);
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
      <button onClick={postIpfs}>post </button>
    </div>
  );
}

export default CreateIPFS;
