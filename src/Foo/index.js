import * as React from 'react';

export default function(props) {
  return (
    <button
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      { props.children }
    </button>
  );
}