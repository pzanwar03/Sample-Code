import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletConnector } from 'wallets/types';
import { getHttpsRpcUrl } from 'web3/utils';

import WalletConnectLogo from 'assets/svg/wallets/walletconnect-logo.svg';

const WEB3_WALLET_CONNECT_BRIDGE = String(process.env.REACT_APP_WEB3_WALLET_CONNECT_BRIDGE);

export const WalletConnectConfig: WalletConnector = {
  id: 'walletconnect',
  logo: WalletConnectLogo,
  name: 'WalletConnect',
  factory(chainId: number): AbstractConnector {
    return new WalletConnectConnector({
      rpc: {
        [chainId]: getHttpsRpcUrl(chainId),
      },
      bridge: WEB3_WALLET_CONNECT_BRIDGE,
      qrcode: true,
    });
  },
  onDisconnect(connector?: WalletConnectConnector): void {
    connector?.close();
  },
  onError(error: Error): Error | undefined {
    return error;
  },
};
