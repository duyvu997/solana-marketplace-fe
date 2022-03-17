import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Image, Button, Col, Row, Layout } from 'antd';

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const { Content } = Layout;

const Attribute = (props: any) => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#000112',
          borderRadius: '10px',
          margin: '5px',
          textAlign: 'center',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ maxHeight: '30px', color: '#4d5fa4' }}>
          {props.attribute.trait_type || '1212'}
        </div>
        <div style={{ maxHeight: '30px', color: 'white' }}>
          {props.attribute.value || '1212121'}
        </div>
      </div>
    </>
  );
};

const DetailModal = ({ show, onClose, item }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { metadataOnchain, metadataExternal, editionData } = item;
  const attributes = metadataExternal.attributes;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };

  const portalDiv = document.getElementById('modal-root')!;

  const modalContent = show ? (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        style={{
          background: '#0c1537',
          width: '1000px',
          height: '600px',
          borderRadius: '15px',
          padding: '15px',
        }}
      >
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <Content
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '95%',
          }}
        >
          <Col style={{ width: '30%', alignItems: 'center' }}>
            <Image
              fallback="image-placeholder.svg"
              src={metadataExternal.image}
              loading="lazy"
            />
          </Col>
          <Col
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignContent: 'center',
              paddingLeft: '15px',
            }}
          >
            <Row
              style={{
                height: '25%',
                display: 'grid',
                gridTemplateRows: '20% 20% 20%',
                gridGap: '3%',
                marginBottom: '5',
              
              }}
            >
              <div
                style={{
                  maxHeight: '30px',
                  padding: '10px',
                  fontSize: '15px',
                  color: 'wheat',
                }}
              >
                Address: {item.mint}
              </div>
              <div
                style={{
                  maxHeight: '30px',
                  color: 'wheat',
                  padding: '10px',
                  fontSize: '15px',
                }}
              >
                Collection: {metadataExternal.name}
              </div>
              <div
                style={{
                  maxHeight: '30px',
                  color: 'wheat',
                  padding: '10px',
                  fontSize: '15px',
                }}
              >
                Owned by: {item.splTokenInfo.owner}
              </div>
            </Row>
            <Row
              style={{
                height: '50%',
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                gridGap: '10px',
                border: 'solid 1px green',
                borderRadius: '10px',
              }}
            >
              {attributes.map((attt: any, index: any) => (
                <Attribute attribute={attt} key={index} />
              ))}
            </Row>

            <Row
              style={{
                height: '10%',
                marginTop: 32,
                padding: '10px',
               
              }}
            >
              <Button
                style={{
                  maxHeight: '30px',
                  color: 'black',
                  marginBottom: '10px',
                }}
              >
                Buy
              </Button>
            </Row>
          </Col>
        </Content>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return null;
  }
};

export default DetailModal;
