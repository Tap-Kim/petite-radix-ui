import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { anchorClass, arrowClass, contentClass } from '../style';

const Popover = () => {
  return (
    <div style={{ height: 200 }}>
      <RadixPopover.Root>
        <RadixPopover.Trigger className={anchorClass({ backgroundColor: 'red', size: 'large' })}>
          open
        </RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content
            className={contentClass()}
            sideOffset={5}
            side="right"
            style={{ backgroundColor: 'red' }}
          >
            <RadixPopover.Close>close</RadixPopover.Close>
            <RadixPopover.Arrow className={arrowClass()} width={20} height={10} />
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    </div>
  );
};

export default Popover;
