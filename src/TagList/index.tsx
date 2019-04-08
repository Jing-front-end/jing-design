import * as React from 'react';
import * as PropTypes from 'prop-types';

import '../_style/index.less';
import './index.less';

export interface TagListProps {
  list: Array<TagItemProps>;
}

interface TagItemProps {
  labelName: string;
  labelColor: string;
}

const TagList = (props: TagListProps) => {
  return (
    <div className="TagList">
      {props.list.map((item, index) => {
        return (
          <span
            key={index}
            className="TagList__tag"
            style={{ borderColor: item.labelColor, color: item.labelColor }}
          >
            {item.labelName}
          </span>
        );
      })}
    </div>
  );
};

TagList.propTypes = {
  list: PropTypes.array,
};

export default React.memo(TagList);
