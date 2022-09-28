import { Menu } from "@headlessui/react";
import clsx from "clsx";
import {
    ComponentProps,
    PropsWithChildren,
    ReactNode,
    ReactPropTypes,
} from "react";

interface DropdownItemProps {
    disabled?: boolean;
    children: ReactNode | string;
    className?: string;
}

const DropdownItem = ({
    disabled,
    children,
    className,
    ...props
}: DropdownItemProps) => {
    return (
        <Menu.Item
            as="div"
            disabled={disabled}
            className={clsx(
                `px-[9px] min-w-[180px] py-[10px] min font-inter ${className}`,
                {
                    "hover:bg-gray-50": !disabled,
                }
            )}
            {...props}
        >
            {({ active, disabled }) => {
                return (
                    <div
                        className={clsx(
                            { "text-gray-300": disabled },
                            "text-gray-700"
                        )}
                    >
                        {children}
                    </div>
                );
            }}
        </Menu.Item>
    );
};

export default DropdownItem;
