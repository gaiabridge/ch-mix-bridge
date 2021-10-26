"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixSender__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MixSender__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_mix, _signer, overrides) {
        return super.deploy(_mix, _signer, overrides || {});
    }
    getDeployTransaction(_mix, _signer, overrides) {
        return super.getDeployTransaction(_mix, _signer, overrides || {});
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
exports.MixSender__factory = MixSender__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "toChain",
                type: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "sendOverHorizon",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "signer",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "sended",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_signer",
                type: "address",
            },
        ],
        name: "setSigner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "toChain",
                type: "uint256",
            },
        ],
        name: "sendCount",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "received",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "fromChain",
                type: "uint256",
            },
            {
                name: "sendId",
                type: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "signature",
                type: "bytes",
            },
        ],
        name: "receiveOverHorizon",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "mix",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "_mix",
                type: "address",
            },
            {
                name: "_signer",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
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
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
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
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051604080610b078339810180604052604081101561003057600080fd5b508051602090910151600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610a4a806100bd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b146101a05780638f32d59b146101a8578063919f01b2146101c4578063afec3575146101f6578063be32cf8d146102af578063f2fde38b146102b7576100b4565b80631371754d146100b9578063238ac933146100ee5780632b9c856b146101125780636c19e78314610144578063715018a61461016c5780638806b7ad14610174575b600080fd5b6100dc600480360360408110156100cf57600080fd5b50803590602001356102dd565b60408051918252519081900360200190f35b6100f66103cd565b604080516001600160a01b039092168252519081900360200190f35b6100dc6004803603606081101561012857600080fd5b506001600160a01b0381351690602081013590604001356103dc565b61016a6004803603602081101561015a57600080fd5b50356001600160a01b0316610417565b005b61016a6104bd565b6100dc6004803603604081101561018a57600080fd5b506001600160a01b038135169060200135610563565b6100f661058b565b6101b061059a565b604080519115158252519081900360200190f35b6101b0600480360360608110156101da57600080fd5b506001600160a01b0381351690602081013590604001356105ab565b61016a6004803603608081101561020c57600080fd5b8135916020810135916040820135919081019060808101606082013564010000000081111561023a57600080fd5b82018360208201111561024c57600080fd5b8035906020019184600183028401116401000000008311171561026e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105d1945050505050565b6100f66108de565b61016a600480360360208110156102cd57600080fd5b50356001600160a01b03166108ed565b60015460408051600160e01b6323b872dd0281523360048201523060248201526044810184905290516000926001600160a01b0316916323b872dd91606480830192602092919082900301818787803b15801561033957600080fd5b505af115801561034d573d6000803e3d6000fd5b505050506040513d602081101561036357600080fd5b505033600081815260036020908152604080832087845282528083208054600181018255818552938390208401879055815187815291519094927f740e9e97dbefca29115c75f16a35974e9a4e87ca417a7050cf67755349a55eb3928290030190a2949350505050565b6002546001600160a01b031681565b6003602052826000526040600020602052816000526040600020818154811061040157fe5b9060005260206000200160009250925050505481565b61041f61059a565b6104735760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b690600090a250565b6104c561059a565b6105195760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6001600160a01b03919091166000908152600360209081526040808320938352929052205490565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b600460209081526000938452604080852082529284528284209052825290205460ff1681565b805160411461062a5760408051600160e51b62461bcd02815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e6774680000000000000000604482015290519081900360640190fd5b336000908152600460209081526040808320878452825280832086845290915290205460ff1615156001141561065f57600080fd5b6040805133606090811b60208084019190915260348301889052605483018790526074808401879052845180850390910181526094840185528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060b485015260d0808501919091528451808503909101815260f0909301845282519281019290922091840151928401519084015191929160001a601b81101561070657601b015b8060ff16601b148061071b57508060ff16601c145b61076f5760408051600160e51b62461bcd02815260206004820152601960248201527f696e76616c6964207369676e61747572652076657273696f6e00000000000000604482015290519081900360640190fd5b6002546040805160008152602080820180845288905260ff851682840152606082018790526080820186905291516001600160a01b039093169260019260a0808401939192601f1981019281900390910190855afa1580156107d5573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107f257600080fd5b60015460408051600160e01b63a9059cbb0281523360048201526024810189905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561084957600080fd5b505af115801561085d573d6000803e3d6000fd5b505050506040513d602081101561087357600080fd5b50503360008181526004602090815260408083208c845282528083208b8452825291829020805460ff19166001179055815189815291517f5640c25e204699bf91c7ce48e1c6ce54b843a4d3d4a0766835ed58f596d1fc709281900390910190a25050505050505050565b6001546001600160a01b031681565b6108f561059a565b6109495760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61095281610955565b50565b6001600160a01b03811661099d57604051600160e51b62461bcd0281526004018080602001828103825260268152602001806109f96026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a723058205a9d1eded0bc36b75b8bd9966568324a670700dd29a533f78450f9e6f19c52c40029";
//# sourceMappingURL=MixSender__factory.js.map