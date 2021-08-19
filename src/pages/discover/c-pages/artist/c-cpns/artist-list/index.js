import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import MHThemeHeaderNormal from '@/components/theme-header-normal';
import MHAlphaList from './c-cpns/alpha-list';
import MHArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function MHArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <MHThemeHeaderNormal title={currentType.name} />
      <MHAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <MHArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
