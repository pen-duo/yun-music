import React, { memo } from 'react';

import MHRadioCategory from './c-cpns/radio-category';
import MHRadioRecommend from './c-cpns/radio-recommend';
import MHRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function MHDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <MHRadioCategory />
      <MHRadioRecommend />
      <MHRadioRanking />
    </DjRadioWrapper>
  )
})
