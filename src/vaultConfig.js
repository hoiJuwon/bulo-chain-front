export const VAULT_ADDRESS = '0x7E66F3DB4c9606e79F1b161985888335AE7c46E2'

export const VAULT_ABI = 
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "donationBlockGap_",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId_",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "vaultOwner_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "donateTarget_",
				"type": "address"
			}
		],
		"name": "createVault",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "vaultOwner_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "donateTarget_",
				"type": "address"
			}
		],
		"name": "updateDonateTarget",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "vaultOwner_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donateTo",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "vaultInfoOf",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "balanceOf",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastDonationBlockNumber",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "donateTarget",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]