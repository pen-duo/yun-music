import React, { memo } from 'react';

import MHPlayHeader from './c-cpns/play-header';
import MHPlayList from './c-cpns/play-list';
import MHLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function MHAppPlayList() {
  return (
    <PanelWrapper>
      <MHPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <MHPlayList/>
        <MHLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
