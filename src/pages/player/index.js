import React, { memo } from 'react';

import MHPlayerInfo from './c-cpns/player-info';
import MHPlayerComment from './c-cpns/player-comment';
import MHPlayerSongs from './c-cpns/player-songs';
import MHPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function MHPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <MHPlayerInfo/>
          <MHPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <MHPlayerSongs/>
          <MHPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
