import Web3 from "web3";
import { DEFAULT_CONTRACT_PROVIDER } from "../web3/contract"

const web3 = new Web3(DEFAULT_CONTRACT_PROVIDER);

export const checkTxHashStatus = async (txHash) => {
    const result = await web3.eth.getTransactionReceipt(txHash)
    return result;
}