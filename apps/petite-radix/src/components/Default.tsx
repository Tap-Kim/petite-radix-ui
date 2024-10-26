import * as Popper from '@petite-radix/react-popper';
import React from 'react';
import { anchorClass, contentClass, arrowClass } from '../style';

const Default: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
      <Popper.Root>
        <Popper.Anchor className={anchorClass({ backgroundColor: 'hotpink', size: 'large'})} onClick={() => setOpen(true)}>
          open
        </Popper.Anchor>
        {open && (
          <Popper.Content className={contentClass()} sideOffset={5}>
            <button onClick={() => setOpen(false)}>close</button>
            <Popper.Arrow className={arrowClass()} width={20} height={10} />
          </Popper.Content>
        )}
      </Popper.Root>
  );
};

export default Default;
