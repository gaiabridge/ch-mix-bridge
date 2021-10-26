"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMix__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class PolygonMix__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_signer, overrides) {
        return super.deploy(_signer, overrides || {});
    }
    getDeployTransaction(_signer, overrides) {
        return super.getDeployTransaction(_signer, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PolygonMix__factory = PolygonMix__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceiveOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SendOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "SetSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "receiveOverHorizon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "received",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
        ],
        name: "sendCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "sendOverHorizon",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sended",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
        ],
        name: "setSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "signer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b5060405162001ac138038062001ac183398101604081905262000034916200028a565b6040518060400160405280600b81526020016a0a0ded8f2cededc409ad2f60ab1b815250604051806040016040528060048152602001630a09a92b60e31b815250604051806040016040528060018152602001603160f81b8152508282620000ab620000a56200019060201b60201c565b62000194565b8151620000c0906004906020850190620001e4565b508051620000d6906005906020840190620001e4565b50508151620000ee91506006906020840190620001e4565b508251602080850191909120825183830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051808303601f1901815291905280516020909101206080525050600880546001600160a01b0319166001600160a01b03949094169390931790925550620002f99050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001f290620002bc565b90600052602060002090601f01602090048101928262000216576000855562000261565b82601f106200023157805160ff191683800117855562000261565b8280016001018555821562000261579182015b828111156200026157825182559160200191906001019062000244565b506200026f92915062000273565b5090565b5b808211156200026f576000815560010162000274565b6000602082840312156200029d57600080fd5b81516001600160a01b0381168114620002b557600080fd5b9392505050565b600181811c90821680620002d157607f821691505b60208210811415620002f357634e487b7160e01b600052602260045260246000fd5b50919050565b6080516117a56200031c600039600081816102890152610b5f01526117a56000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de57806395d89b4111610097578063afec357511610071578063afec3575146103d5578063d505accf146103e8578063dd62ed3e146103fb578063f2fde38b1461043457600080fd5b806395d89b41146103a7578063a457c2d7146103af578063a9059cbb146103c257600080fd5b806370a08231146102db578063715018a6146103045780637ecebe001461030c5780638806b7ad1461032c5780638da5cb5b14610362578063919f01b21461037357600080fd5b80632b9c856b1161014b5780633644e515116101255780633644e5151461028457806339509351146102ab57806354fd4d50146102be5780636c19e783146102c657600080fd5b80632b9c856b1461023b57806330adf81f1461024e578063313ce5671461027557600080fd5b806306fdde0314610193578063095ea7b3146101b15780631371754d146101d457806318160ddd146101f5578063238ac933146101fd57806323b872dd14610228575b600080fd5b61019b610447565b6040516101a891906113b4565b60405180910390f35b6101c46101bf3660046113ea565b6104d9565b60405190151581526020016101a8565b6101e76101e2366004611414565b6104ef565b6040519081526020016101a8565b6003546101e7565b600854610210906001600160a01b031681565b6040516001600160a01b0390911681526020016101a8565b6101c4610236366004611436565b610564565b6101e7610249366004611472565b6105bb565b6101e77f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b604051601281526020016101a8565b6101e77f000000000000000000000000000000000000000000000000000000000000000081565b6101c46102b93660046113ea565b6105f9565b61019b610630565b6102d96102d43660046114a5565b6106be565b005b6101e76102e93660046114a5565b6001600160a01b031660009081526001602052604090205490565b6102d961073b565b6101e761031a3660046114a5565b60076020526000908152604090205481565b6101e761033a3660046113ea565b6001600160a01b03919091166000908152600960209081526040808320938352929052205490565b6000546001600160a01b0316610210565b6101c4610381366004611472565b600a60209081526000938452604080852082529284528284209052825290205460ff1681565b61019b610771565b6101c46103bd3660046113ea565b610780565b6101c46103d03660046113ea565b610819565b6102d96103e33660046114d6565b610826565b6102d96103f63660046115a4565b610ac5565b6101e7610409366004611617565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6102d96104423660046114a5565b610d63565b6060600480546104569061164a565b80601f01602080910402602001604051908101604052809291908181526020018280546104829061164a565b80156104cf5780601f106104a4576101008083540402835291602001916104cf565b820191906000526020600020905b8154815290600101906020018083116104b257829003601f168201915b5050505050905090565b60006104e6338484610dfe565b50600192915050565b60006104fb3383610f23565b3360008181526009602090815260408083208784528252808320805460018101825581855293839020840187905590518681529093917f740e9e97dbefca29115c75f16a35974e9a4e87ca417a7050cf67755349a55eb3910160405180910390a2949350505050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001981146105a5576105a585336105a0868561169b565b610dfe565b6105b0858585611069565b506001949350505050565b600960205282600052604060002060205281600052604060002081815481106105e357600080fd5b9060005260206000200160009250925050505481565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916104e69185906105a09086906116b2565b6006805461063d9061164a565b80601f01602080910402602001604051908101604052809291908181526020018280546106699061164a565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b505050505081565b6000546001600160a01b031633146106f15760405162461bcd60e51b81526004016106e8906116ca565b60405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b690600090a250565b6000546001600160a01b031633146107655760405162461bcd60e51b81526004016106e8906116ca565b61076f6000611238565b565b6060600580546104569061164a565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156108025760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106e8565b61080f3385858403610dfe565b5060019392505050565b60006104e6338484611069565b80516041146108775760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064016106e8565b336000908152600a60209081526040808320878452825280832086845290915290205460ff161515600114156108ac57600080fd5b6040516bffffffffffffffffffffffff193360601b16602082015260348101859052605481018490526074810183905260009060940160408051601f198184030181529082905280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000091830191909152603c82018190529150605c0160408051601f19818403018152918152815160209283012091840151908401516060850151929350909160001a601b81101561097357610970601b826116ff565b90505b8060ff16601b148061098857508060ff16601c145b6109d45760405162461bcd60e51b815260206004820152601960248201527f696e76616c6964207369676e61747572652076657273696f6e0000000000000060448201526064016106e8565b60085460408051600081526020810180835287905260ff84169181019190915260608101859052608081018490526001600160a01b039091169060019060a0016020604051602081039080840390855afa158015610a36573d6000803e3d6000fd5b505050602060405103516001600160a01b031614610a5357600080fd5b610a5d3387611288565b336000818152600a602090815260408083208c845282528083208b8452825291829020805460ff1916600117905590518881527f5640c25e204699bf91c7ce48e1c6ce54b843a4d3d4a0766835ed58f596d1fc70910160405180910390a25050505050505050565b83421115610ad257600080fd5b6001600160a01b038781166000818152600760208181526040808420805482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981860152808401889052978e166060890152608088018d905260a0880181905260c08089018d90528351808a03909101815260e08901845280519085012061190160f01b6101008a01527f00000000000000000000000000000000000000000000000000000000000000006101028a0152610122808a01919091528351808a0390910181526101429098019092528651968301969096209484529190529192600192909190610bc39084906116b2565b90915550506001600160a01b038781169089161415610be157600080fd5b873b15610cba57604080516020810185905280820184905260f886901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e91610c49918591606501611724565b60206040518083038186803b158015610c6157600080fd5b505afa158015610c75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c999190611745565b6001600160e01b031916631626ba7e60e01b14610cb557600080fd5b610d4e565b6040805160008082526020820180845284905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610d0e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d2e57600080fd5b886001600160a01b0316816001600160a01b031614610d4c57600080fd5b505b610d59888888610dfe565b5050505050505050565b6000546001600160a01b03163314610d8d5760405162461bcd60e51b81526004016106e8906116ca565b6001600160a01b038116610df25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106e8565b610dfb81611238565b50565b6001600160a01b038316610e605760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106e8565b6001600160a01b038216610ec15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106e8565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038216610f835760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106e8565b6001600160a01b03821660009081526001602052604090205481811015610ff75760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106e8565b6001600160a01b038316600090815260016020526040812083830390556003805484929061102690849061169b565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610f16565b6001600160a01b0383166110cd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106e8565b6001600160a01b03821661112f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106e8565b6001600160a01b038316600090815260016020526040902054818110156111a75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106e8565b6001600160a01b038085166000908152600160205260408082208585039055918516815290812080548492906111de9084906116b2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161122a91815260200190565b60405180910390a350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166112de5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106e8565b80600360008282546112f091906116b2565b90915550506001600160a01b0382166000908152600160205260408120805483929061131d9084906116b2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000815180845260005b8181101561138d57602081850181015186830182015201611371565b8181111561139f576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006113c76020830184611367565b9392505050565b80356001600160a01b03811681146113e557600080fd5b919050565b600080604083850312156113fd57600080fd5b611406836113ce565b946020939093013593505050565b6000806040838503121561142757600080fd5b50508035926020909101359150565b60008060006060848603121561144b57600080fd5b611454846113ce565b9250611462602085016113ce565b9150604084013590509250925092565b60008060006060848603121561148757600080fd5b611490846113ce565b95602085013595506040909401359392505050565b6000602082840312156114b757600080fd5b6113c7826113ce565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156114ec57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8082111561151957600080fd5b818701915087601f83011261152d57600080fd5b81358181111561153f5761153f6114c0565b604051601f8201601f19908116603f01168101908382118183101715611567576115676114c0565b816040528281528a602084870101111561158057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600080600080600060e0888a0312156115bf57600080fd5b6115c8886113ce565b96506115d6602089016113ce565b95506040880135945060608801359350608088013560ff811681146115fa57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561162a57600080fd5b611633836113ce565b9150611641602084016113ce565b90509250929050565b600181811c9082168061165e57607f821691505b6020821081141561167f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156116ad576116ad611685565b500390565b600082198211156116c5576116c5611685565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060ff821660ff84168060ff0382111561171c5761171c611685565b019392505050565b82815260406020820152600061173d6040830184611367565b949350505050565b60006020828403121561175757600080fd5b81516001600160e01b0319811681146113c757600080fdfea26469706673582212204994b9bad9506f146c48e4ba1d37bc61d4a0adf5a0fff8cc8f1b545912fb247664736f6c63430008090033";
//# sourceMappingURL=PolygonMix__factory.js.map