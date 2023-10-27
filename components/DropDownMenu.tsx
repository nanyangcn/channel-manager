'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface DropDownMenuProps {
  label: string;
  list: {
    id: string;
    name: string;
  }[];
  isRequired?: boolean;
}

function DropDownMenu({ label, list, isRequired = false }: DropDownMenuProps) {
  const [state, setState] = useState<string | null>(null);

  return (
    <form className="flex h-[62px] w-[275px] flex-col gap-0.5">
      <label className="inline-flex h-5 w-9 items-center gap-0.5">
        <p className="text-sm font-semibold leading-tight text-zinc-900">
          {label}
        </p>
        {isRequired && (
          <span className="text-red-500">*</span>
        )}
      </label>
      <div className="flex h-10 items-center gap-3 rounded-lg border border-slate-300 py-2 pl-3 pr-2 shadow">
        <p className="shrink grow basis-0 text-base font-normal leading-normal text-zinc-900">
          {state ?? 'Select a Hotel'}
        </p>
        <div className="relative h-6 w-6">
          <Image src="/indicator/caretDown.svg" alt="Arrow Down" fill />
        </div>
      </div>
      {/* TODO: Add list */}
    </form>
  );
}

export default DropDownMenu;
