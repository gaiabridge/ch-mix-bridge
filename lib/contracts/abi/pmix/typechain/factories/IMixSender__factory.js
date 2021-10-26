"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMixSender__factory = void 0;
const ethers_1 = require("ethers");
class IMixSender__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMixSender__factory = IMixSender__factory;
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
                name: "sendId",
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
                name: "sender",
                type: "address",
            },
            {
                name: "toChain",
                type: "uint256",
            },
            {
                name: "index",
                type: "uint256",
            },
        ],
        name: "sended",
        outputs: [
            {
                name: "amount",
                type: "uint256",
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
        inputs: [
            {
                name: "receiver",
                type: "address",
            },
            {
                name: "fromChain",
                type: "uint256",
            },
            {
                name: "sendId",
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
];
//# sourceMappingURL=IMixSender__factory.js.map