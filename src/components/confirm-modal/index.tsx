import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ModelInfo = styled.div`
  padding: 0px 10px 20px;
  font-family: "TT Norms Pro";
`;
const Title = styled.div`
  font-family: "TT Norms Pro";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  text-transform: uppercase;
  & h4 {
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
const Content = styled.div`
  padding-top: 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  width: 150px;
  margin-top: 20px;
`;
const StyledModal = styled(Modal)`
  & .modal-dialog {
    max-width: 600px;
  }
`;

const ConfirmModal: React.FunctionComponent<any> = (props) => {
  const { title, content, confirm, onHide } = props;

  return (
    <StyledModal {...props} centered>
      <Modal.Header closeButton>
        <Title>
          <h4>{title}</h4>
        </Title>
      </Modal.Header>
      <Modal.Body>
        <ModelInfo>
          <Row>
            <Col>
              <Content>{content}</Content>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={onHide}
              >
                cancel
              </Button>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{ backgroundColor: '#ff4cb5' }}
                onClick={() => {
                  onHide();
                  confirm();
                }}
              >
                confirm
              </Button>
            </Col>
          </Row>
        </ModelInfo>
      </Modal.Body>
    </StyledModal>
  );
};

export default ConfirmModal;
