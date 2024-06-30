import Web3 from 'web3';
import BigNumber from 'bignumber.js';

const DEFAULT_CONTRACT_PROVIDER = new Web3.providers.WebsocketProvider(getWSRpcUrl());
export const web3 = new Web3(DEFAULT_CONTRACT_PROVIDER);

export const MAX_UINT_256 = new BigNumber(2).pow(256).minus(1);
export const ZERO_BIG_NUMBER = new BigNumber(0);

export function getWSRpcUrl(chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)): string {
  const WEB3_RPC_ID = String(process.env.REACT_APP_WEB3_RPC_ID);

  switch (chainId) {
    case 1:
      return `wss://mainnet.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 3:
        return `wss://ropsten.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 4:
      return `wss://rinkeby.infura.io/ws/v3/${WEB3_RPC_ID}`;
    case 42:
      return `wss://kovan.infura.io/ws/v3/${WEB3_RPC_ID}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getHttpsRpcUrl(chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID)): string {
  const WEB3_RPC_ID = String(process.env.REACT_APP_WEB3_RPC_ID);

  switch (chainId) {
    case 1:
      return `https://mainnet.infura.io/v3/${WEB3_RPC_ID}`;
    case 3:
        return `https://ropsten.infura.io/v3/${WEB3_RPC_ID}`;
    case 4:
      return `https://rinkeby.infura.io/v3/${WEB3_RPC_ID}`;
    case 42:
      return `https://kovan.infura.io/v3/${WEB3_RPC_ID}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getEtherscanTxUrl(
  txHash: string,
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID),
): string {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/tx/${txHash}`;
    case 3:
        return `https://ropsten.etherscan.io/tx/${txHash}`;
    case 4:
      return `https://rinkeby.etherscan.io/tx/${txHash}`;
    case 42:
      return `https://kovan.etherscan.io/tx/${txHash}`;
    case 56:
        return `https://bscscan.com/address/tx/${txHash}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getEtherscanAddressUrl(
  address: string,
  chainId: number = Number(process.env.REACT_APP_WEB3_CHAIN_ID),
): string {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/address/${address}`;
    case 3:
        return `https://ropsten.etherscan.io/address/${address}`;
    case 4:
      return `https://rinkeby.etherscan.io/address/${address}`;
    case 42:
      return `https://kovan.etherscan.io/address/${address}`;
    case 56:
        return `https://bscscan.com/address/${address}`;
    default:
      throw new Error(`Not supported chainId=${chainId}.`);
  }
}

export function getNetworkName(chainId: number | undefined): string {
  switch (chainId) {
    case 1:
      return 'Mainnet';
    case 3:
        return 'Ropsten';
    case 4:
      return 'Rinkeby';
    case 42:
      return 'kovan';
    case 56:
      return 'BSC Mainnet';
    default:
      return '-';
  }
}

export function getExponentValue(decimals: number = 0): BigNumber {
  return new BigNumber(10).pow(decimals);
}

export function getHumanValue(value?: BigNumber, decimals: number = 0): BigNumber | undefined {
  return value?.div(getExponentValue(decimals));
}

export function getNonHumanValue(value: BigNumber | number, decimals: number = 0): BigNumber {
  return (new BigNumber(value)).multipliedBy(getExponentValue(decimals));
}

export function formatBigValue(value?: BigNumber, decimals: number = 4, defaultValue: string = '-', minDecimals: number | undefined = undefined): string {
  return value ? new BigNumber(value.toFixed(decimals)).toFormat(minDecimals) : defaultValue;
}

export function formatUSDValue(value?: BigNumber, decimals: number = 2, minDecimals: number = decimals): string {
  if (value === undefined) {
    return '-';
  }

  const val = BigNumber.isBigNumber(value) ? value : new BigNumber(value);
  const formattedValue = formatBigValue(val.abs(), decimals, '-', minDecimals);

  return val.isPositive() ? `$${formattedValue}` : `-$${formattedValue}`;
}

export function defaultFormatValue(value?: BigNumber): string {
  return formatBigValue(value, 2);
}

export function shortenAddr(addr: string, first: number = 6, last: number = 4) {
  return [String(addr).slice(0, first), String(addr).slice(-last)].join('...');
}

export function convertToNumber(value: BigNumber | undefined) {
  if (value) {
    return parseFloat(value.toString());
  }

  return 0;
}
