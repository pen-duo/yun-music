import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import MHThemeHeaderRCM from '@/components/theme-header-rcm';
import MHTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function MHRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <MHThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <MHTopRanking info={state.topUpList}/>
        <MHTopRanking info={state.topNewList}/>
        <MHTopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
