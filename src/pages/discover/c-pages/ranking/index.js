import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import MHTopRanking from "./c-cpns/top-ranking";
import MHRankingHeader from './c-cpns/ranking-header';
import MHRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function MHRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <MHTopRanking/>
      </RankingLeft>
      <RankingRight>
        <MHRankingHeader/>
        <MHRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
