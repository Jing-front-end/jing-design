import React, { useState, useEffect } from 'react';
// import * as PropTypes from 'prop-types';
// import RegInput from './reg';
import Input, { InputProps } from './input';
import Prefix from './prefix';

export interface SearchProps extends InputProps {
  value?: string;
  icon?: string;
  className?: string;
}

const Search = (props: SearchProps) => {
  const { value, icon, className } = props;

  return (
    <Prefix icon={icon} className={className}>
      <Input value={value} {...props} />
    </Prefix>
  );
};

export default Search;
