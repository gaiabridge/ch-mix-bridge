"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secure = require("../secure.json");
const INFURA_ID = secure.infuraId;
const ALCHEMY_KEY = secure.alchemyKey;
exports.default = {
    chainId: 1,
    blockTimeSecond: 15,
    startBlock: 13316000,
    rewardPerBlock: 0.5,
    infuraId: INFURA_ID,
    endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,
    contracts: {
        LPToken: "0xc7175038323562cB68E4BbdD379E9fE65134937f",
        Sushi: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
        MaidCoin: "0x4Af698B479D0098229DC715655c667Ceb6cd8433",
        MaidCafe: "0xD428F1050AdC29976d4339b1ec602832034dF701",
        TheMaster: "0xCD9E5C7969A4C0B4FA8726B243143381f4984337",
        Maids: "0x42ED30f2c459601A4f74Ff831B76Be64195D3dE4",
        MasterCoin: "0xc0746351f7F55a69415b280Ca6378093EA4aAFF2",
        NursePart: "0x861f8d5b601054D5109B93D3775cd71c74593f78",
        CloneNurses: "0x5eE657F5426484A777a1fC7Abd436DfDB13b1cc3",
        NurseRaid: "0x629d37B273c05597C8bEfB7B48525803B202D9Ea",
        SushiGirls: "0xEB3b418e4A4430392Cd57b1356c5B1d2205A56d9",
        LingerieGirls: "0x579a60fbc649d3398f13e0385dbe79b3ffad757c",
    },
};
//# sourceMappingURL=Config.js.map