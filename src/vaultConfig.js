export const VAULT_ADDRESS = '0x4E862beA9282b962163564a8DBcA638601CFC929'

export const VAULT_ABI = 
[
	{
		"inputs": [
			{
				"internalType": "contract BuloNFTInterface",
				"name": "buloNft_",
				"type": "address"
			},
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
				"indexed": false,
				"internalType": "address",
				"name": "vaultOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewDonatation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "vaultOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldDonateTarget",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newDonateTarget",
				"type": "address"
			}
		],
		"name": "NewDonateTarget",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "vaultOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "donateTarget",
				"type": "address"
			}
		],
		"name": "NewVault",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buloNft",
		"outputs": [
			{
				"internalType": "contract BuloNFTInterface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
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
		"outputs": [
			{
				"components": [
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
					},
					{
						"internalType": "address[]",
						"name": "contributors",
						"type": "address[]"
					}
				],
				"internalType": "struct VaultStorage.VaultInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"outputs": [
			{
				"components": [
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
					},
					{
						"internalType": "address[]",
						"name": "contributors",
						"type": "address[]"
					}
				],
				"internalType": "struct VaultStorage.VaultInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donationBlockGap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "vaultOwner_",
				"type": "address"
			}
		],
		"name": "executeDonation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
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
		"outputs": [
			{
				"components": [
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
					},
					{
						"internalType": "address[]",
						"name": "contributors",
						"type": "address[]"
					}
				],
				"internalType": "struct VaultStorage.VaultInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]