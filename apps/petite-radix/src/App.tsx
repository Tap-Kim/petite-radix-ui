import React from "react";
import { createContextScope } from '@petite-radix/react-context';
import type { Scope } from '@petite-radix/react-context';


const SIDE_OPTIONS = ['top', 'right', 'bottom', 'left'] as const;
const ALIGN_OPTIONS = ['start', 'center', 'end'] as const;

type Side = (typeof SIDE_OPTIONS)[number];
type Align = (typeof ALIGN_OPTIONS)[number];

/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/

const POPPER_NAME = 'Popper';

type ScopedProps<P> = P & { __scopePopper?: Scope };
const [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);

type PopperContextValue = {
  anchor: null;
  onAnchorChange(anchor: null): void;
};

const [PopperProvider, usePopperContext] = createPopperContext<PopperContextValue>(POPPER_NAME);

const App: React.FC = () => {

  return (
    <div>
      <h1>Welcome to Petite Popper</h1>
    </div>
  );
};

export default App;
