import axios from "axios";
import { resolve } from "./resolve";

export async function create(name, note, birth, x, y) {
  const url = "https://ipfs.infura.io:5001/api/v0/add?stream-channels=true";
  const rawData = { name, note, birth, x, y };
  const stringData = JSON.stringify(rawData);
  const formData = new FormData();
  formData.append("data", stringData);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  return await resolve(axios.post(url, formData, config));
}

export async function get(hash) {
  const url = `https://ipfs.io/ipfs/${hash}`;
  
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  try {
    const data = await resolve(axios.get(url));
    console.log(data);
    const { name, note, birth, x, y } = data.data.data;
    return [ name, note, birth, x, y ];
  } catch {
    return ["not found"];
  }
}