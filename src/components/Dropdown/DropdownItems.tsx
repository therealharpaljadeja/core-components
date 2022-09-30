import { Menu, Transition } from "@headlessui/react";
import React from "react";

const DropdownItems = ({ ...props }) => {
    return (
        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform translate-x-0 opacity-0 scale-95"
            enterTo="transform opacity-100 origin-top-left scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 origin-top-left scale-95"
        >
            <Menu.Items
                className={`absolute shadow-lg border-[1px] border-gray-200 bg-base-white rounded-lg flex flex-col mt-2 ${
                    props.className && props.className
                }`}
            >
                {props.children}
            </Menu.Items>
        </Transition>
    );
};

export default DropdownItems;
