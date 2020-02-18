import React from 'react';
import * as PropTypes from 'prop-types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../_style/index.less';
import './index.less';

export interface CarouselProps {
  list: Array<ListItemProps>;
  height: string;
}

export interface ListItemProps {
  url: string;
  onClick?: () => void;
}

const Carousel = (props: CarouselProps) => {
  const { list, height } = props;

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
      <Slider {...settings}>
        {list.map((item: ListItemProps) => (
          <div className="slick-slide-photo" key={item.url}>
            <a
              style={{ backgroundImage: `url('${item.url}')`, height: height }}
              onClick={item.onClick}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  list: PropTypes.array,
  height: PropTypes.string,
};

export default React.memo(Carousel);
