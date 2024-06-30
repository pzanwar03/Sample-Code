import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import SelectMyselfDogeModal from "./SelectMyselfDogeModal";
import PuppyConfirmModal from "components/open-puppy-confirm-modal";
import PuppySuccessmModal from "components/open-puppy-success-modal";
import ResultModal from "./ResultModal";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import { useWallet } from "wallets/wallet";
import { useModalHandlers } from "state/modal/hooks";
import { useWeb3Contracts } from "web3/contracts";
import { /*useHashState,*/ useHashHandlers } from "state/transaction/hooks";
import { createBreedRequestPrivate } from "../../api";

const Title = styled.h5`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 35px;
`;
const Conttent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
    text-align: center;
  }
`;
const SelectItem = styled.div`
  margin: 15px;
  width: 328px;
  height: 328px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #4f4f4f;
  background-color: #121212;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 280px;
    height: 280px;
    margin: 15px auto;
  }
  & img {
    width: 100%;
    border-radius: 10px;
  }
`;
const Icon = styled.div`
  margin: 10px;
`;
const ItemTitle = styled.h4`
  font-size: 20px;
  margin: 0 15px;
  text-transform: uppercase;
  color: #ff4cb5;
`;
const BreedBtn = styled.button`
  padding: 7px 30px;
  border: 0;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  background: #ff4cb5;
  cursor: pointer;
  text-align: center;
  border-radius: 21px;
  margin-top: 50px;
`;

const MyselfItems = () => {
  const wallet = useWallet();
  const { puppy } = useWeb3Contracts();
  // const { txHash } = useHashState();
  const { setTxHash } = useHashHandlers();
  const { toggleLoadingModal /*, togglesetSuccessModal, toggleFailedModal*/ } = useModalHandlers();

  const [showSelectDogeModal, setShowSelectDogeModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const [selectedDoggo, setSelectedDoggo] = useState<any>();
  const [selectedDoge, setSelectedDoge] = useState<any>();
  const [selectedType, setSelectedType] = useState<string>("Doggo");

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(function () {
        setShowResultModal(true);
        setShowSuccessModal(false);
      }, 7000);
    }
  }, [showSuccessModal]);

  const breedingRequest = () => {
    toggleLoadingModal(true);

    if (wallet.account) {
      const msgParams = JSON.stringify({
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
          ],
          BreedingRequest: [
            { name: 'dogeId', type: 'uint256' },
            { name: 'doggoId', type: 'uint256' },
          ]
        },
        primaryType: 'BreedingRequest',
        domain: {
          name: 'The Doge Pound',
        },
        message: {
          dogeId: selectedDoge.tokenId,
          doggoId: selectedDoggo.tokenId,
        }
      });

      wallet.library
        .send("eth_signTypedData_v4", [wallet.account, msgParams])
        .then((signature: any) => {
          createBreedRequestPrivate(signature, selectedDoge.tokenId, selectedDoggo.tokenId)
            .then(async(res: any) => {
              if (res && res.status) {
                setShowConfirmModal(true);
                toggleLoadingModal(false);
                try {
                  const result = await puppy.mintPuppyByDoge(
                    res.data.breedPrice,
                    res.data.doggoId,
                    res.data.dogeOwner,
                    res.data.dogeId,
                    res.data.deadline,
                    res.data.v,
                    res.data.r,
                    res.data.s,
                    () => mintPuppySuccess()
                  );
                  setTxHash(result);
                } catch (e) {
                  setShowConfirmModal(false);
                }
              } else {
              }
            })
        })
        .catch((e: any) => {
          toggleLoadingModal(false);
          // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
          if (e?.code !== 4001) {
          }
        });
    }
  }

  const mintPuppySuccess = () => {
    setShowSuccessModal(true);
    setShowConfirmModal(false);
    puppy.reload();
  }

  return (
    <Reveal effect="fadeInRight">
      <Row>
        <Col>
          <Title>Select both of your Doggo and Doge to move on to the breeding process.</Title>
          <Conttent>
            <div>
              <SelectItem
                onClick={() => {
                  setSelectedType("Doggo");
                  setShowSelectDogeModal(true);
                }}
              >
                {selectedDoggo ? <img src={selectedDoggo["image"]} alt="" /> : <>Select your Doggo</>}
              </SelectItem>
              {selectedDoggo && <ItemTitle>Doggo #{selectedDoggo.tokenId}</ItemTitle>}
            </div>
            <Icon>
              <AiFillHeart size={40} color={"#FF4CB5"} />
            </Icon>
            <div>
              <SelectItem
                onClick={() => {
                  setSelectedType("Doge");
                  setShowSelectDogeModal(true);
                }}
              >
                {selectedDoge ? <img src={selectedDoge["image"]} alt="" /> : <>Select your Doge</>}
              </SelectItem>
              {selectedDoge && <ItemTitle>doge #{selectedDoge.tokenId}</ItemTitle>}
            </div>
          </Conttent>
        </Col>
      </Row>
      <>
        {(selectedDoge && selectedDoggo) && (
          <div className={"text-center"}>
            <BreedBtn
              onClick={() => {
                breedingRequest();
              }}
            >
              Breed
            </BreedBtn>
          </div>
        )}
      </>

      <SelectMyselfDogeModal
        show={showSelectDogeModal}
        selectedType={selectedType}
        selectItem={selectedType === "Doggo"? setSelectedDoggo : setSelectedDoge}
        onHide={() => setShowSelectDogeModal(false)}
      />

      <PuppyConfirmModal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} />
      <PuppySuccessmModal show={showSuccessModal} onHide={() => {}} />

      <ResultModal show={showResultModal} onHide={() => setShowResultModal(false)} />
    </Reveal>
  );
};
export default MyselfItems;
