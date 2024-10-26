import * as Popper from '@petite-radix/react-popper';
import { Portal } from '@radix-ui/react-portal';
import React from 'react';
import { Scrollable, anchorClass, animatedContentClass } from '../style';

const WithPortal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Scrollable style={{ height: 100 }}>
      <Popper.Root>
        <Popper.Anchor
          className={anchorClass({ backgroundColor: 'orange', size: 'large' })}
          onClick={() => setOpen(true)}
        >
          open
        </Popper.Anchor>

        {open && (
          <Portal asChild>
            <Popper.Content
              className={animatedContentClass()}
              sideOffset={5}
              side="right"
              style={{ backgroundColor: 'orange' }}
            >
              <button onClick={() => setOpen(false)}>close</button>
            </Popper.Content>
          </Portal>
        )}
      </Popper.Root>
    </Scrollable>
  );
};

export default WithPortal;
