import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';
import { sample } from './sample';
const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
  Own = '4',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const auctions = sample;

  return (
    <>
      <Banner
        src="/main-banner.svg"
        headingText="The amazing world of Metaplex."
        subHeadingText="Buy exclusive Metaplex NFTs."
        useBannerBg
      />
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Latest Collections
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {/* {isLoading &&
                  [...Array(10)].map((_, idx) => <CardLoader key={idx} />)} */}
                {!isLoading &&
                  auctions.map(auction => (
                    <Link
                      key={auction.mint}
                      to={`/collections/${auction.metadataExternal.name}`}
                    >
                      <AuctionRenderCard auctionView={auction} />
                    </Link>
                  ))}
              </div>
            </Row>
          </Col>
        </Content>

         <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Best Collections
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {/* {isLoading &&
                  [...Array(10)].map((_, idx) => <CardLoader key={idx} />)} */}
                {!isLoading &&
                  auctions.map(auction => (
                    <Link
                      key={auction.mint}
                      to={`/collections/${auction.metadataExternal.name}`}
                    >
                      <AuctionRenderCard auctionView={auction} />
                    </Link>
                  ))}
              </div>
            </Row>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
