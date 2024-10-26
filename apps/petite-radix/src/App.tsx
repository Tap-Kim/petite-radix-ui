import React from 'react';
import { Popover, WithCustomArrow, WithPortal } from './components';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Petite Popper</h1>
      <WithCustomArrow />
      <WithPortal />
      <Popover />
    </div>
  );
};

export default App;
