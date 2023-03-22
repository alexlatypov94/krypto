import React from 'react';
import { TABLE_HEAD } from '../constants';

export const TableHeader: React.FC = React.memo(() => {
  return (
    <div className="grid grid-cols-12 grid-flow-row	items-end">
      {TABLE_HEAD.map(({ isExchange, id, name, logo }) => {
        return isExchange ? (
          <div className="grid  text-white items-center gap-2" key={id}>
            <img src={logo} alt="" width={100} height={30} className="justify-self-center" />
            <div className="grid grid-cols-2 grid-flow-row bg-neutral-500 p-2 ">
              <div>SPOT</div>
              <div>FUTURES</div>
            </div>
          </div>
        ) : (
          <div key={id} className="bg-neutral-500 p-2 text-white">
            {name}
          </div>
        );
      })}
    </div>
  );
});

TableHeader.displayName = 'TableHeader';
