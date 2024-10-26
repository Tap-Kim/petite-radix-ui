import * as Popper from '@petite-radix/react-popper';
import React from 'react';
import { Scrollable, anchorClass, animatedContentClass } from '../style';

const WithCustomArrow = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Scrollable style={{ height: 100 }}>
      <Popper.Root>
        <Popper.Anchor
          className={anchorClass({ backgroundColor: 'blue', size: 'large' })}
          onClick={() => setOpen(true)}
        >
          open
        </Popper.Anchor>

        {open && (
          <Popper.Content
            className={animatedContentClass()}
            side="right"
            sideOffset={5}
            style={{ backgroundColor: 'blue' }}
          >
            <button onClick={() => setOpen(false)}>close</button>
          </Popper.Content>
        )}
      </Popper.Root>
    </Scrollable>
  );
};

export default WithCustomArrow;
