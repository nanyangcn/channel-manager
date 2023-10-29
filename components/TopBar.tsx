import React from 'react';

import Logo from './Logo';
import ToggleDark from './ToggleDark';

function TopBar() {
  return (
    <div className="flex justify-between px-6 py-4 dark:bg-additional-dark">
      <Logo />
      <ToggleDark />
    </div>
  );
}

export default TopBar;
