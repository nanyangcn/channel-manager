'use client';

import { useState } from 'react';

import { Hotel } from 'types/hotel';
import Label from './components/Label';
import DropList from './components/DropDownList';
import DropDownButton from './components/DropDownButton';

interface DropDownMenuProps {
  label: string;
  hotels: Hotel[];
  isRequired?: boolean;
}

function DropDownMenu({ label, hotels, isRequired = false }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[62px] w-[275px] flex-col gap-0.5">
      <Label label={label} isRequired={isRequired} />
      <DropDownButton isOpen={isOpen} setIsOpen={setIsOpen}>
        <DropList isOpen={isOpen} setIsOpen={setIsOpen} hotels={hotels} />
      </DropDownButton>
    </div>
  );
}

export default DropDownMenu;
