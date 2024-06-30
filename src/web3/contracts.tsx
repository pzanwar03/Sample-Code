import React from "react";
import { useWallet } from "wallets/wallet";
import Web3Contract from "web3/contract";
import { DogePoundContract, useDogePoundContract } from "web3/contracts/dogePound";
import { PuppyContract, usePuppyContract } from "web3/contracts/puppy";

import UserRejectedModal from "components/user-rejected-modal";

export type Web3ContractsData = {
  dogePound: DogePoundContract;
  puppy: PuppyContract;
};

export type Web3Contracts = Web3ContractsData & {};

const Web3ContractsContext = React.createContext<Web3Contracts>({} as any);

export function useWeb3Contracts(): Web3Contracts {
  return React.useContext(Web3ContractsContext);
}

const Web3ContractsProvider: React.FunctionComponent = (props) => {
  const wallet = useWallet();
  const dogePoundContract = useDogePoundContract();
  const puppyContract = usePuppyContract();

  const [userRejectedVisible, setUserRejectedVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const contracts = [dogePoundContract.contract, puppyContract.contract];

    function handleError(err: Error & { code: number }, contract: Web3Contract, { method }: any) {
      console.error(`${contract.name}:${method}`, { error: err });

      if (err.code === 4001) {
        setUserRejectedVisible(true);
      } else {
        // TODO: Add err notification
      }
    }

    contracts.forEach((contract: Web3Contract) => {
      contract.on("error", handleError);
    });

    return () => {
      contracts.forEach((contract: Web3Contract) => {
        contract.off("error", handleError);
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    const contracts = [dogePoundContract.contract, puppyContract.contract];

    contracts.forEach((contract) => {
      contract.setProvider(wallet.provider);
    });
  }, [wallet.provider]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    dogePound: dogePoundContract,
    puppy: puppyContract,
  };

  return (
    <Web3ContractsContext.Provider value={value}>
      <UserRejectedModal show={userRejectedVisible} onHide={() => setUserRejectedVisible(false)} />
      {props.children}
    </Web3ContractsContext.Provider>
  );
};

export default Web3ContractsProvider;
