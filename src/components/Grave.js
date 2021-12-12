import { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

function Grave({info, vault, myAddress, createVault, donateTo, updateDonateTarget}) {
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
    <Card variant="outlined">
        <div><strong>My Grave</strong></div>
        name : {info[0]} <br/>
        message: {info[1]} <br/>
        birth: {info[2]} <br/>
        tokenId: {info[5]} <br/>
        your address: {myAddress}
    </Card>
    <div>
        {/* get Vault info */}
        <Card variant="outlined">
            <div><strong> My Vault</strong></div>
            <div>isActive : {vault?.isActive === true ? "true" : "false"}</div>
            <div>balance : {vault?.balanceOf}</div>
            <div>tokenId : {vault?.tokenId}</div>
            <div>donate target : {vault?.donateTarget}</div>
            <div>lastDonationBlockNumber : {vault?.lastDonationBlockNumber}</div>
            <div>contributors : {vault?.contributors}</div>
            <div>
                <TextField name="donateTarget" value={donateTarget} onChange={onChange} placeholder="donateTarget" />
                {/* 내 무덤일 때 */}
                <Button variant="outlined" onClick={create}>create vault</Button> 
                <Button variant="outlined" onClick={update}>change donateTarget</Button> 
            </div>
            {/* 내 무덤 or 다른 사람 무덤 */}
            <div>
                <TextField name="amount" value={amount} onChange={onChange} placeholder="amount" />
                <Button variant="outlined" onClick={donate}>add ETH to this vault</Button>
            </div>
        </Card>
        <></>
    </div>
    </>
    ) 
}
export default Grave;
