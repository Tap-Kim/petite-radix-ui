import * as Popper from '@petite-radix/react-popper';
import React from 'react';
import { Scrollable, anchorClass, CustomArrow, animatedContentClass } from '../style';

const WithCustomArrow = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Scrollable style={{height: 100}}>
      <Popper.Root>
        <Popper.Anchor className={anchorClass({ backgroundColor: 'blue', size: 'large'})} onClick={() => setOpen(true)}>
          open
        </Popper.Anchor>

        {open && (
          <Popper.Content className={animatedContentClass()} side="right" sideOffset={5}>
            <button onClick={() => setOpen(false)}>close</button>
            <Popper.Arrow asChild offset={20}>
              <CustomArrow width={20} height={10} />
            </Popper.Arrow>
          </Popper.Content>
        )}
      </Popper.Root>
    </Scrollable>
  );
};

export default WithCustomArrow;
