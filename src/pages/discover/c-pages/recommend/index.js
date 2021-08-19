import React, { memo } from 'react';

import MHTopBanner from './c-cpns/top-banner';
import MHHotRecommend from './c-cpns/hot-recommend';
import MHNewAlbum from './c-cpns/new-album';
import MHRankingList from './c-cpns/ranking-list';
import MHUserLogin from './c-cpns/user-login';
import MHSettleSinger from './c-cpns/settle-singer';
import MHHotRadio from './c-cpns/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function MHRecommend() {
  return (
    <RecommendWraper>
      <MHTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <MHHotRecommend />
          <MHNewAlbum />
          <MHRankingList />
        </RecommendLeft>
        <RecommendRight>
          <MHUserLogin />
          <MHSettleSinger />
          <MHHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
