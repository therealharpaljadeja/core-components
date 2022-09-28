import { Menu } from "@headlessui/react";
import React from "react";

const DropdownItems = ({ ...props }) => {
    return (
        <Menu.Items
            className={`absolute shadow-lg border-[1px] border-gray-200 bg-base-white rounded-lg flex flex-col mt-2 ${
                props.className && props.className
            }`}
        >
            {props.children}
        </Menu.Items>
    );
};

export default DropdownItems;
