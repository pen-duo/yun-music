import React, { memo } from 'react';

import {
  hotRadios
} from "@/services/local-data";

import MHThemeHeaderSmall from '@/components/theme-header-small';
import {
  HotRadioWrapper
} from './style';

export default memo(function MHHotRadio() {
  return (
    <HotRadioWrapper>
      <MHThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/#" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
