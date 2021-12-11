import { useState } from "react";

function Grave({info, vault, myAddress, createVault, donateTo, updateDonateTarget, vaultInfoOf}) {
    const [inputs, setInputs] = useState({
        donateTarget: "",
        amount: 0,
        tokenId: info[5],
    });

    const { donateTarget, amount } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        setInputs({
        ...inputs,
        [name]: value,
        });
        console.log(inputs);
    };

    const donate = async () => {
        alert(`donate ${inputs.donateTarget} ${inputs.amount}`);
        donateTo(inputs.donateTarget, inputs.amount);
    };
    const create = async () => {
        alert(`create vault ${info[5]} ${myAddress}->${inputs.donateTarget}`);
        createVault(info[5], myAddress, inputs.donateTarget);
    };
    const update = async () => {
        alert(`update ${myAddress} vault to ${inputs.donateTarget}`);
        updateDonateTarget(myAddress, inputs.donateTarget);
    };
    console.log(info);
    
    return (
    <>
    <button>Check out my Grave</button>
    name : {info[0]} <br/>
    message: {info[1]} <br/>
    birth: {info[2]} <br/>
    tokenId: {info[5]} <br/>
    your address: {myAddress}
    <div>
        <div><strong>=Vault=</strong></div>
        {/* get Vault info */}
        <div>isActive : {vault?.isActive === true ? "true" : "false"}</div>
        <div>balance : {vault?.balanceOf}</div>
        <div>tokenId : {vault?.tokenId}</div>
        <div>donate target : {vault?.donateTarget}</div>
        <input name="donateTarget" value={donateTarget} onChange={onChange} placeholder="donateTarget" />
        {/* 내 무덤일 때 */}
        <button onClick={create}>create vault</button> 
        <button onClick={update}>change target</button>
        {/* 내 무덤 or 다른 사람 무덤 */}
        <div>🌹</div>
        <input name="amount" value={amount} onChange={onChange} placeholder="amount" />
        <button onClick={donate}>donate to this vault</button>
        <></>
    </div>
    </>
    ) 
}
export default Grave;
