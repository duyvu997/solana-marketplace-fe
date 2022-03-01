import React from 'react';
import { Card, CardProps } from 'antd';
import { ArtContent } from '../ArtContent';
import { AuctionView, useArt, useCreators } from '../../hooks';
import { AmountLabel } from '../AmountLabel';
import { MetaAvatar } from '../MetaAvatar';
import { AuctionCountdown } from '../AuctionNumbers';

import { useAuctionStatus } from './hooks/useAuctionStatus';
import { useTokenList } from '../../contexts/tokenList';
import { Artist } from '../../types';

export interface AuctionCard extends CardProps {
  auctionView: AuctionView;
}

export const AuctionRenderCard = (props: any) => {
  const { metadataOnchain, metadataExternal } = props.auctionView;
  const creators = metadataExternal.properties.creators as Artist[];

  const card = (
    <Card hoverable={true} className={`auction-render-card`} bordered={false}>
      <div className={'card-art-info'}>
        <div className="auction-gray-wrapper">
          <div className={'card-artist-info'}>
            <MetaAvatar
              creators={creators.length ? [creators[0]] : undefined}
            />
            <span className={'artist-name'}>
              {creators[0]?.name ||
                creators[0]?.address?.substr(0, 6) ||
                'Go to auction'}
              ...
            </span>
          </div>
          <div className={'art-content-wrapper'}>
            <ArtContent
              className="auction-image no-events"
              preview={false}
              pubkey={metadataOnchain.updateAuthority}
              uri={metadataExternal.image}
              allowMeshRender={false}
            />
          </div>
          {/* <div className={'art-name'}>{name}</div> */}
          <div className="auction-info-container">
            <div className={'info-message'}>{metadataOnchain.data.name}</div>
            {/* <AuctionCountdown auctionView={auctionView} labels={false} /> */}
          </div>
        </div>
      </div>
      {/* <div className="card-bid-info"> */}
      {/* <span className={'text-uppercase info-message'}>{status}</span> */}
      {/* <AmountLabel
          containerStyle={{ flexDirection: 'row' }}
          title={status}
          amount={amount}
          iconSize={24}
          tokenInfo={tokenInfo}
        /> */}
      {/* </div> */}
    </Card>
  );

  return card;
};
