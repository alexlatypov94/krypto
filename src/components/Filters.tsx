import React from 'react';

export const Filters = () => {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <label>Автоматически ранжировать если ЛАР от:</label>
        <input className="rounded-lg border-2 border-black" type="text" />
      </div>
      <div>
        <label>Подсвечивать спред если он более:</label>
        <input className="rounded-lg border-2 border-black" type="text" />
      </div>
      <div>
        <label>Подсвечивать фандинг если он более:</label>
        <input className="rounded-lg border-2 border-black" type="text" />
      </div>
    </div>
  );
};
