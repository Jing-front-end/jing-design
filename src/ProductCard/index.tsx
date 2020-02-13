import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import '../_style/index.less';
import './index.less';

export interface ProductCardProps {
  headerTitle: string;
  headerTagList?: Array<HeaderTagItemProps>;
  bodyList?: Array<CardItemProps>;
  footerTagList?: Array<FooterTagItemProps>;
}

interface HeaderTagItemProps {
  headerTagList: string;
  headerTitleClasses: string;
}

interface CardItemProps {}

interface FooterTagItemProps {}

function ProductCard(props: ProductCardProps) {
  const {} = props;
  return (
    <div>
      <div>头部</div>
      <div>中间</div>
      <div>footer</div>
    </div>
  );
}

ProductCard.defaultProps = {
  headerTitle: '',
};

ProductCard.propTypes = {
  headerTitle: PropTypes.string,
  headerTagList: PropTypes.array,
  bodyList: PropTypes.array,
  footerTagList: PropTypes.array,
};

export default React.memo(ProductCard);
