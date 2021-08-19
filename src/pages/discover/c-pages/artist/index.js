import React, { memo } from 'react';

import MHArtistCategory from './c-cpns/artist-category';
import MHArtistList from './c-cpns/artist-list';
import { MHArtistWrapper } from './style';

export default memo(function MHArtist() {
  return (
    <MHArtistWrapper>
      <div className="content wrap-v2">
        <MHArtistCategory/>
        <MHArtistList/>
      </div>
    </MHArtistWrapper>
  )
})
