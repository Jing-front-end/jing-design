import React from 'react';
import * as PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../_style/index.less';
import './index.less';

export interface CarouselProps {
  children: any;
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
};

export default React.memo(Carousel);
