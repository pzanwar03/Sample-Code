import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { useWeb3Contracts } from "web3/contracts";
import { getEtherscanTxUrl, getEtherscanAddressUrl } from "web3/utils";

const Body1 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 16px;
font-weight: bold;
font-family: "TT Norms Pro";
& .avatarWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FF4CB5;
  margin-right: 28px;
  & img {
    width: 107px;
    height: 107px;
    border-radius: 53px;
    margin-bottom: 10px;
  }
  @media (max-width: 767px) {
    display: none;
  }
}
& .walletAddress {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  & span {
    margin-bottom: 15px;
  }
  & input {
    width: 337px;
    height: 42px;
    background: #1B1B1B;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 21px;
    color: white;
    @media (max-width: 767px) {
      width: 100%;
    }
    &:focus-visible {
      outline: none;
    }
  }
}
`;
const BtnWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 35px;
& button {
  width: 200px;
  height: 42px;
  font-size: 13px;
  line-height: 16px;
  border-radius: 10px;
  text-transform: uppercase;
  color: white;
  &:first-child {
    margin-right: 20px;
  }
  &:disabled {
    cursor: not-allowed;
    color: grey;
  }
  @media (max-width: 767px) {
    width: 120px;
  }
}
`;
const ConfirmMessage = styled.div`
text-align: center;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
`
const StyledModal = styled(Modal)`
& .modal-dialog {
  max-width: 670px;
}
`;

const TransferModal: React.FC<any> = (props) => {
    const { dogePound, puppy } = useWeb3Contracts();
  
    const { doge, transactionHash, setTransactionHash, targetAddress, setTargetAddress, confirm, setConfirm, depositing, setDepositing, type } = props;
  
    const transfer = async () => {
      setDepositing(true);
  
      try {
        const result = type === "Doge" ?
        await dogePound.transferDoge(targetAddress, doge?.tokenId)
        :
        await puppy.transferPuppy(targetAddress, doge?.tokenId);
        setTransactionHash(result);
      } catch (e) {
        console.log(e);
        setDepositing(false);
      }
    };
  
    return (
      <StyledModal {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title className="mb-0 pb-1 coust-title">
            <span style={{ fontSize: "20px" }}>
              {
                confirm ?
                "CONFIRMATION" :
                "TRANSFER"
              }
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            confirm ?
            <ConfirmMessage>
              <span>Are you sure you want send {doge?.name} to <a href={getEtherscanAddressUrl(targetAddress)} target="_blank" rel="noreferrer">{targetAddress}</a> wallet?</span>
              {transactionHash && (
                <div className="text-center" style={{ marginTop: "10px" }}>
                  <a href={getEtherscanTxUrl(transactionHash)} target="_blank" rel="noreferrer">
                    View on Etherscan
                  </a>
                </div>
              )}
            </ConfirmMessage> :
            <Body1>
              <div className="avatarWrapper">
                <img src={doge?.image} alt="doge" />
                <span>{doge?.name}</span>
              </div>
              <div className="walletAddress">
                <span>WALLET ADDRESS</span>
                <input value={targetAddress} placeholder="Enter recipient wallet address" onChange={e => setTargetAddress(e.target.value)} />
              </div>
            </Body1>
          }
          <BtnWrapper>
            <button
              style={{ background: "transparent", borderColor: "#FF4CB5" }}
              onClick={() => {
                setTargetAddress("");
                setConfirm(false);
                props.onHide();
              }}
            >
              Cancel
            </button>
            {
              confirm ?
              <button
                style={{ background: "#FF4CB5", borderColor: "#FF4CB5" }}
                onClick={() => transfer()}
                disabled={depositing}
              >
                Confirm
              </button> :
              <button
                style={{ background: "#FF4CB5", borderColor: "#FF4CB5" }}
                onClick={() => setConfirm(true)}
                disabled={targetAddress === ""}
              >
                Transfer
              </button>
            }
          </BtnWrapper>   
        </Modal.Body>
      </StyledModal>
    );
  };

  export default TransferModal;