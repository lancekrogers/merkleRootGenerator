const { MerkleTree } = require("merkletreejs");
const KECCAK256 = require("keccak256");
const addresses = require("./whitelist.json");

const leaves = addresses.map((x) => KECCAK256(x));
const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });
const buf2hex = (x) => "0x" + x.toString("hex");
const root = buf2hex(tree.getRoot());
console.log(root);
