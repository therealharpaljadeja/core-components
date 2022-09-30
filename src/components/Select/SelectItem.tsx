import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { BiCheck } from "react-icons/bi";

interface SelectItemProps {
    key: string;
    value: Object;
    name: string;
    disabled?: boolean;
    className?: string;
}

const SelectItem = ({
    key,
    value,
    name,
    disabled = false,
    className,
}: SelectItemProps) => {
    return (
        <Listbox.Option key={key} value={value} disabled={disabled} as={"li"}>
            {({ active, selected }) => {
                return (
                    <div
                        className={clsx(
                            { "text-gray-300": disabled },
                            `px-[18px] min-w-[180px] text-base py-[10px] min font-inter ${className}`,
                            {
                                "hover:bg-gray-50 focus:bg-gray-50": !disabled,
                            },
                            { "bg-gray-50": active },
                            "text-gray-700 flex items-center justify-between"
                        )}
                    >
                        {name}
                        {selected && <BiCheck className="text-primary-600" />}
                    </div>
                );
            }}
        </Listbox.Option>
    );
};

export default SelectItem;
