import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from "./style";

const MHThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/#">{more}</a>
    </HeaderWrapper>
  )
})

MHThemeHeaderSmall.defaultProps = {

}

MHThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default MHThemeHeaderSmall;
