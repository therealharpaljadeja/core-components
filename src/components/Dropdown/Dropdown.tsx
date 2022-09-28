import { Menu, Transition } from "@headlessui/react";
import React, { ReactNode, Fragment } from "react";

const Dropdown = ({ ...props }) => {
    return <Menu as="div">{props.children}</Menu>;
};

export default Dropdown;
