import { Menu } from "@headlessui/react";
import React, { ReactNode } from "react";

const DropdownButton = ({ ...props }) => {
    return <Menu.Button {...props}>{props.children}</Menu.Button>;
};

export default DropdownButton;
