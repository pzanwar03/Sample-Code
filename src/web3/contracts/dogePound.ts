import React from 'react';
import BigNumber from 'bignumber.js';

import { useReload } from 'hooks/useReload';
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import { useWallet } from 'wallets/wallet';
import Web3Contract from 'web3/contract';

export const CONTRACT_DOGE_POUND_ADDRESS = String(
  process.env.REACT_APP_WEB3_CHAIN_ID === '1' ?
    process.env.REACT_APP_CONTRACT_DOGE_POUND
    :
    process.env.REACT_APP_CONTRACT_DOGE_POUND_TEST
);

type DogePoundData = {
  maxDogeSupply: number;
  provenanceHash: string;
  maxToMint: number;
  mintPrice: BigNumber | undefined;
  saleIsActive: boolean;
  totalSupply: number;
  startingIndex: number;
  tokensOfOwner: Array<string>;
};

export type DogePoundContract = DogePoundData & {
  contract: Web3Contract;
  reload(): void;
  mintDoges: (ethAmount: BigNumber, numberOfTokens: number) => Promise<any>;
  transferDoge: (to: string, tokenId: number) => Promise<any>;
};

const InitialData: DogePoundData = {
  maxDogeSupply: 10000,
  provenanceHash: "",
  maxToMint: 30,
  mintPrice: undefined,
  saleIsActive: false,
  totalSupply: 0,
  startingIndex: 0,
  tokensOfOwner: [],
};

export function useDogePoundContract(): DogePoundContract {
  const [reload] = useReload();
  const wallet = useWallet();

  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require('web3/abi/dogePound.json'),
      CONTRACT_DOGE_POUND_ADDRESS,
      'DOGE_POUND',
    );
  }, []);

  const [data, setData] = React.useState<DogePoundData>(InitialData);

  useAsyncEffect(async () => {
    let [provenanceHash] = await contract.batch([
      {
        method: 'PROVENANCE_HASH',
      },
    ]);

    setData(prevState => ({
      ...prevState,
      provenanceHash,
    }));
  }, [reload]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      let [tokensOfOwner] = await contract.batch([
        {
          method: 'tokensOfOwner',
          methodArgs: [wallet.account]
        },
      ]);
  
      setData(prevState => ({
        ...prevState,
        tokensOfOwner,
      }));
    }
  }, [reload, wallet]);

  const mintDoges = React.useCallback(async (ethAmount: BigNumber, numberOfTokens: number): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send('mintDoges', [numberOfTokens], {
      from: wallet.account,
      value: ethAmount.toString(10)
    }, reload);
    return result;
  }, [reload, contract, wallet.account]);

  const transferDoge = React.useCallback(async (to: string, tokenId: number): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send('transferFrom',
    [wallet.account, to, tokenId],
    {
      from: wallet.account
    }, reload);
    return result;
  }, [reload, contract, wallet.account]);

  return React.useMemo<DogePoundContract>(() => ({
    ...data,
    contract,
    reload,
    mintDoges,
    transferDoge
  }), [
    data,
    contract,
    reload,
    mintDoges,
    transferDoge
  ]);
}
