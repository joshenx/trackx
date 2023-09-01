import {
  chakra,
  forwardRef,
  ImageProps,
} from '@chakra-ui/react';
import * as React from 'react';

import logo from '/src/images/trackx_white.svg';

export const WhiteLogo = forwardRef<ImageProps, 'img'>((props, ref) => {

  return <chakra.img src={logo} ref={ref} width={'120px'} {...props} />;
});
