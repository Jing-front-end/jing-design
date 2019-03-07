import * as React from 'react';

export interface FooProps {
  size?: string;
  children?: any;
}

export default function(props: FooProps) {
  return (
    <button
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      {props.children}
    </button>
  );
}
