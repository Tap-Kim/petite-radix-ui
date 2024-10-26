import React from 'react';
import Default from './components/Default';
import WithCustomArrow from './components/WithCustomArrow';
import WithPortal from './components/WithPortal';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Petite Popper</h1>
      <Default />
      <WithCustomArrow />
      <WithPortal />
    </div>
  );
};

export default App;
