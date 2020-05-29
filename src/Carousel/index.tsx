import * as React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import './index.less';
const Carousel = (props: any) => {
  return <Swiper {...props}>{props.children}</Swiper>;
};

export default React.memo(Carousel);
