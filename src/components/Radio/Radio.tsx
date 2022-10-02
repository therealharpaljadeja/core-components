import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

interface RadioProps {
    values: ({ [key: string]: string } & { name: string })[];
    label: string;
    name: string;
}

const Radio = ({ values, label, name }: RadioProps) => {
    const [selected, setSelected] = useState(values[0]);

    return (
        <RadioGroup
            className="flex flex-col space-y-4"
            value={selected}
            onChange={setSelected}
            name={name}
        >
            <RadioGroup.Label>{label}</RadioGroup.Label>
            <div className="flex flex-col space-y-2">
                {values.map((value) => (
                    <RadioGroup.Option
                        className={({ checked }) =>
                            clsx(
                                {
                                    "hover:border-primary-300 focus:border-primary-300 focus:shadow-primary-100 focus:shadow-md outline-none border-[1px] border-gray-200 ":
                                        !checked,
                                },
                                {
                                    "border-2 border-primary-600 bg-primary-50":
                                        checked,
                                },
                                "group rounded-xl p-4"
                            )
                        }
                        key={value.name}
                        value={value.value}
                    >
                        {({ active, checked }) => (
                            <div className="flex w-full space-x-2 items-start justify-between">
                                <div className="text-lg">
                                    {checked ? (
                                        <MdRadioButtonChecked className="fill-primary-700" />
                                    ) : (
                                        <MdRadioButtonUnchecked className="group-hover:fill-primary-600" />
                                    )}
                                </div>
                                <div className="flex flex-1  flex-col space-y-2">
                                    <RadioGroup.Label
                                        as="span"
                                        className={clsx(
                                            "text-gray-700 font-medium",
                                            { "text-primary-800": checked }
                                        )}
                                    >
                                        {value.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                        className={clsx({
                                            "text-primary-700": checked,
                                        })}
                                        as="span"
                                    >
                                        {value.description}
                                    </RadioGroup.Description>
                                </div>
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

export default Radio;
