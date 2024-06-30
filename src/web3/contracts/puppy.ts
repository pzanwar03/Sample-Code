/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useReload } from 'hooks/useReload';
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import { useWallet } from 'wallets/wallet';
import Web3Contract from 'web3/contract';

export const REACT_APP_CONTRACT_PUPPY_POUND = String(
  process.env.REACT_APP_WEB3_CHAIN_ID === '1' ?
    process.env.REACT_APP_CONTRACT_PUPPY_POUND
    :
    process.env.REACT_APP_CONTRACT_PUPPY_POUND_TEST
);

type PuppyData = {
  maxSupply: number;
  provenanceHash: string;
  maxToMint: number;
  mintIsActive: boolean;
  totalSupply: number;
  startingIndex: number;
  tokensOfOwner: Array<string>;
};

export type PuppyContract = PuppyData & {
  contract: Web3Contract;
  reload(): void;
  mintPuppies: (tokenIds: number[], mintPuppySuccess: Function) => Promise<any>;
  transferPuppy: (to: string, tokenId: number) => Promise<any>;
  existPuppy: (tokenId: number) => Promise<any>;
  mintPuppyByDoge: (ethAmount: string, doggoId: number, dogeOwner:string, dogeId:number, deadline: number, v:number, r:string, s: string, mintPuppySuccess: Function) => Promise<any>;
};

const InitialData: PuppyData = {
  maxSupply: 10000,
  provenanceHash: "",
  maxToMint: 30,
  mintIsActive: false,
  totalSupply: 0,
  startingIndex: 0,
  tokensOfOwner: [],
};

export function usePuppyContract(): PuppyContract {
  const [reload] = useReload();
  const wallet = useWallet();

  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require('web3/abi/puppy.json'),
      REACT_APP_CONTRACT_PUPPY_POUND,
      'PUPPY',
    );
  }, []);

  const [data, setData] = React.useState<PuppyData>(InitialData);

  useAsyncEffect(async () => {
    let [provenanceHash, mintIsActive, tokensOfOwner] = await contract.batch([
      {
        method: 'PROVENANCE_HASH',
      },
      {
        method: 'mintIsActive',
      },
      {
        method: 'tokensOfOwner',
        methodArgs: [wallet.account]
      },
    ]);

    setData(prevState => ({
      ...prevState,
      provenanceHash,
      mintIsActive,
      tokensOfOwner,
    }));
  }, [reload]);

  const mintPuppies = React.useCallback(async (tokenIds: number[], mintPuppySuccess: Function): Promise<any> => {
    const result = await contract.send('mintPuppy', [tokenIds], {
      from: wallet.account,
    }, mintPuppySuccess);
    return result;
  }, [reload, contract, wallet.account]);

  const mintPuppyByDoge = React.useCallback(async (
      ethAmount: string, doggoId: number, dogeOwner:string, dogeId:number, deadline: number,
      v:number, r:string, s: string, mintPuppySuccess: Function
    ): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send('breedPuppyByDoggo', [wallet.account, doggoId, dogeOwner, dogeId, ethAmount, deadline, v, r, s], {
      from: wallet.account,
      value: ethAmount
    }, mintPuppySuccess);
    return result;
  }, [reload, contract, wallet.account]);

  const transferPuppy = React.useCallback(async (to: string, tokenId: number): Promise<any> => {
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

  const existPuppy = React.useCallback(async (tokenId: number): Promise<any> => {
    let [result] = await contract.batch([
      {
        method: 'exists',
        methodArgs: [tokenId]
      },
    ]);
    return result;
  }, [contract]);


  return React.useMemo<PuppyContract>(() => ({
    ...data,
    contract,
    reload,
    mintPuppies,
    transferPuppy,
    existPuppy,
    mintPuppyByDoge
  }), [
    data,
    contract,
    reload,
    mintPuppies,
    transferPuppy,
    existPuppy,
    mintPuppyByDoge
  ]);
}
