import React from 'react';
import { Carousel } from '../../../dist';

export default function() {
  return (
    <Carousel>
      <div>
        <h3 style={{ height: '140px', backgroundColor: 'red' }}>1</h3>
      </div>
      <div>
        <h3 style={{ height: '140px', backgroundColor: 'green' }}>2</h3>
      </div>
      <div>
        <h3 style={{ height: '140px', backgroundColor: 'yellow' }}>3</h3>
      </div>
    </Carousel>
  );
}
