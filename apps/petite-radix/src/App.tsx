import React from 'react';
import { Popover, Default, WithPortal } from './components';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Petite Popper & Popover</h1>
      <Default />
      <WithPortal />
      <Popover />
    </div>
  );
};

export default App;
