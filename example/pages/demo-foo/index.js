/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { Scroll, Popup, Button, util } from '../../../dist';

export default function() {
  const [isShow, setIsShow] = React.useState(false);
  const [scrollToY, setScrollToY] = React.useState(0);
  const [endPullUp, setEndPullUp] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('touchmove', util.preventDefault, {
      passive: false,
    });
    setTimeout(() => {
      setScrollToY('null');
    });
  }, [scrollToY]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <Scroll
        showPullDown
        showPullUp
        endPullUp={endPullUp}
        bottom={20}
        top={30}
        scrollToY={scrollToY}
        scrollPullDown={pullDownComplete => {
          setTimeout(() => {
            pullDownComplete(() => {
              console.log('ok');
            });
          }, 3000);
        }}
        scrollPullUp={pullUpComplete => {
          setTimeout(() => {
            pullUpComplete(() => {
              console.log('ok');
            });
          }, 3000);
        }}
        onScrollY={y => {
          console.log(y);
        }}
      >
        <div style={{ width: '100%' }}>
          <a
            onClick={() => {
              setScrollToY(-100);
            }}
          >
            try pulling me 1
          </a>
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          <Button.Group>
            <Button.Self
              color="blue"
              onClick={() => {
                setIsShow(true);
              }}
              primary
            >
              确认
            </Button.Self>
          </Button.Group>
          <Popup.Group
            show={isShow}
            onClose={() => {
              setIsShow(false);
            }}
          >
            <Popup.Prompt
              title="这个我必须要告诉你！"
              onCancel={() => {
                setIsShow(false);
              }}
              onSubmit={() => {
                alert('ok');
                setIsShow(false);
              }}
            >
              djsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf
              sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdfdjsdfkdsf sdfsdf
            </Popup.Prompt>
          </Popup.Group>
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          try pulling me 2<br />
          try pulling me 3<br />
          try pulling me 4<br />
          try pulling me 5<br />
          try pulling me 6<br />
          try pulling me 7<br />
          try pulling me 8<br />
          try pulling me 9<br />
          try pulling me 10
          <br />
          try pulling me 11
          <br />
          <a
            onClick={() => {
              setEndPullUp(true);
            }}
          >
            try pulling me 12
          </a>
          <br />
        </div>
      </Scroll>
    </div>
  );
}
