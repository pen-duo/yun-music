import React, { memo } from 'react';

import MHHotAlbum from './c-cpns/hot-album';
import MHTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function MHAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <MHHotAlbum/>
      <MHTopAlbum/>
    </AblumWrapper>
  )
})
