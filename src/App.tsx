import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./Routes";
import Web3WalletProvider from "wallets/wallet";
import Web3ContractsProvider from "web3/contracts";

import Home from "./containers/Home";
import Doge from "./containers/gallery/Doge";
import Provenance from "./containers/Provenance";
import Breeding from "./containers/breeding";
import Staking from "./containers/staking";
import MyHouse from "./containers/myHouse";
import Apps from "./containers/app";
import LeaderBoard from "containers/leader-board";
import Setting from "./containers/setting";
import Terms from "./containers/Terms";
// import Whitepaper from "./containers/Whitepaper";
import Feeding from "./containers/Feeding";
import Puppy from "./containers/gallery/Puppy";
import LoadingModal from "components/LoadingModal";
import SuccessModal from "components/SuccessModal";
import FailedModal from "components/FailedModal";
import { useModalState, useModalHandlers } from "state/modal/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
// import LaunchPad from "containers/launch-pad";

const App = () => {
  const { showLoadingModal, showSuccessModal, showFailedModal } = useModalState();
  const { togglesetSuccessModal, toggleFailedModal } = useModalHandlers();

  return (
    <Web3WalletProvider>
      <Web3ContractsProvider>
        <Router>
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/doge" exact component={Doge} />
            <PublicRoute path="/provenance" exact component={Provenance} />
            <PublicRoute path="/breeding/:page" exact component={Breeding} />
            <PublicRoute path="/house" exact component={MyHouse} />
            <PublicRoute path="/setting" exact component={Setting} />
            <PublicRoute path="/terms" exact component={Terms} />
            {/* <PublicRoute path="/whitepaper" exact component={Whitepaper} /> */}
            <PublicRoute path="/feeding" exact component={Feeding} />
            <PublicRoute path="/puppy" exact component={Puppy} />
            <PublicRoute path="/app" exact component={Apps} />
            <PublicRoute path="/staking" exact component={Staking} />
            <PublicRoute path="/leader-board" exact component={LeaderBoard} />
            {/* <PublicRoute path="/launch-pad" exact component={LaunchPad} /> */}

            <PublicRoute path="*">
              <p>Page not found</p>
            </PublicRoute>
          </Switch>
        </Router>

        <LoadingModal show={showLoadingModal} size={150} />
        <SuccessModal show={showSuccessModal} setShow={togglesetSuccessModal} size={150} />
        <FailedModal show={showFailedModal} setShow={toggleFailedModal} size={150} />
      </Web3ContractsProvider>
    </Web3WalletProvider>
  );
};

export default App;
