import React from 'react';
import { Badge } from '../stories/Badge';

import Marquee from 'react-fast-marquee';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full sm:max-w-4xl absolute top-0 py-4 overflow-x-hidden flex flex-col items-center gap-4">
      <Marquee autoFill>
        <Badge primary={false} label="$489,05 (BLUE)" />
        <Badge primary={true} label="$489,05 (BLUE)" />
      </Marquee>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 font-semibold uppercase">
          <div className="h-3 w-3 rounded-full bg-greeny border border-dark" />{' '}
          Compra
        </span>
        <span className="flex items-center gap-2 font-semibold uppercase">
          <div className="h-3 w-3 rounded-full bg-reddy border border-dark" />{' '}
          Venta
        </span>
      </div>
    </header>
  );
};
