/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import OpeningPuppy from "../../assets/gif/opening_puppy.gif";

const CustomModal = styled(Modal)`
  .modal-dialog {
    display: flex;
    justify-content: center;
  }
  & .modal-content {
    width: auto !important;
  }
`;

const PuppyModal: React.FunctionComponent<any> = (props) => {

  return (
    <CustomModal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <img src={OpeningPuppy} style={{ width: 300, borderRadius: 10, border: 'solid 1px #4F4F4F' }} alt="OPEN" />
    </CustomModal>
  );
};

export default PuppyModal;
