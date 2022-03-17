import React, { useState } from 'react';
import { Image, Button } from 'antd';
import DetailModal from './detail';

export const CollectionItem = ({ item }: any) => {
  const { metadataOnchain, metadataExternal, editionData } = item;

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Image
        fallback="image-placeholder.svg"
        src={metadataExternal.image}
        loading="lazy"
      />
      <div
        style={{
          textAlign: 'center',
          lineHeight: '2rem',
          background: 'bisque',
          color: 'black',
          fontWeight: '600',
          fontSize: '1.3rem',
        }}
      >
        {metadataExternal.name || 'Unknown'}
      </div>
      <div style={{ textAlign: 'center' }}>26.69 SOL</div>
      <div style={{ textAlign: 'center' }}>
        # {editionData.edition || 'Unknown'}
      </div>
      <Button onClick={() => setShowModal(true)} style={{ maxHeight: '30px' }}>
        Buy
      </Button>
      <DetailModal onClose={() => setShowModal(false)} show={showModal}>
        Hello from the modal!
      </DetailModal>
    </>
  );
};
