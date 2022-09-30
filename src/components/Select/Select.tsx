import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button, { ButtonVariant } from "../Button/Button";

interface SelectProps {
    name: string;
    label?: string;
    children: ReactNode;
    data: { [key: string]: any & { name: string } }[];
    hint?: string;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    label,
    name,
    children,
    data,
    hint,
    disabled = false,
}) => {
    const [selected, setSelected] = useState(data[0]);
    return (
        <Listbox
            as={"div"}
            disabled={disabled}
            value={selected}
            name={name}
            className="flex space-y-2 flex-col max-w-max"
            onChange={setSelected}
        >
            <Listbox.Label className="text-sm text-gray-700">
                {label}
            </Listbox.Label>
            <div className="relative group">
                <Listbox.Button as={Fragment}>
                    <div>
                        <Button
                            variant={ButtonVariant.Tertiary}
                            rightIcon={
                                <FiChevronDown className="pointer-events-none" />
                            }
                            className="shadow-md w-full focus:ring-primary-100 focus:border-primary-300 text-gray-500"
                            label={selected.name}
                        />
                    </div>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 overflow-y-scroll bg-base-white w-full border-[1px] border-gray-200 rounded-lg shadow-sm flex flex-col">
                        {children}
                    </Listbox.Options>
                </Transition>
            </div>
            {hint && <div className="text-gray-500 font-inter">{hint}</div>}
        </Listbox>
    );
};

export default Select;
