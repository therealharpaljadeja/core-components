import { ComponentStory } from "@storybook/react";
import Button, { ButtonVariant } from "../Button/Button";
import Dropdown from "./Dropdown";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";
import DropdownItem from "./DropdownItem";
import {
    AiOutlinePhone,
    AiOutlineSetting,
    AiOutlineTeam,
    AiOutlineUser,
} from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

const DropdownChevron = () => {
    return (
        <Transition show={true}>
            <FiChevronDown />
        </Transition>
    );
};

export const Playground = () => {
    return (
        <Dropdown>
            <DropdownButton>
                <Button
                    variant={ButtonVariant.Tertiary}
                    rightIcon={<DropdownChevron />}
                    label="Account"
                />
            </DropdownButton>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform translate-x-0 opacity-0 scale-95"
                enterTo="transform opacity-100 origin-top-left scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 origin-top-left scale-95"
            >
                <DropdownItems>
                    <div>
                        <DropdownItem className="border-b-[1px] border-gray-200">
                            <div className="flex space-x-4">
                                <img
                                    className="h-[40px] w-[40px] rounded-full"
                                    src="https://bit.ly/dan-abramov"
                                />
                                <div className="flex flex-col">
                                    <span className="font-semibold">
                                        Olivia Rhye
                                    </span>
                                    <span>olivia@untitledui.com</span>
                                </div>
                            </div>
                        </DropdownItem>
                    </div>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlineUser />
                            <span className="ml-2">Profile</span>
                        </div>
                    </DropdownItem>
                    <div className="border-y-[1px] border-gray-200">
                        <DropdownItem disabled={true}>Team</DropdownItem>
                        <DropdownItem>
                            <div className="flex items-center">
                                <AiOutlineSetting />
                                <span className="ml-2">Settings</span>
                            </div>
                        </DropdownItem>
                    </div>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlineTeam />
                            <span className="ml-2">Invite Collegues</span>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlinePhone />
                            <span className="ml-2">Support</span>
                        </div>
                    </DropdownItem>
                </DropdownItems>
            </Transition>
        </Dropdown>
    );
};

export const ImageButtonDropdown = () => {
    return (
        <div className="w-full">
            <Dropdown>
                <DropdownButton>
                    <div className="h-14 w-14 rounded-full group overflow-hidden group-focus:ring-primary-200 group-focus:ring-opacity-100 group-focus:ring-4 group-focus:ring-offset-0">
                        <img src="https://bit.ly/dan-abramov" />
                    </div>
                </DropdownButton>

                <DropdownItems className="max-h-64 overflow-y-scroll">
                    <div>
                        <DropdownItem className="border-b-[1px] border-gray-200">
                            <div className="flex space-x-4">
                                <img
                                    className="h-[40px] w-[40px] rounded-full"
                                    src="https://bit.ly/dan-abramov"
                                />
                                <div className="flex flex-col">
                                    <span className="font-semibold">
                                        Dan Abramov
                                    </span>
                                    <span>olivia@untitledui.com</span>
                                </div>
                            </div>
                        </DropdownItem>
                    </div>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlineUser />
                            <span className="ml-2">Profile</span>
                        </div>
                    </DropdownItem>
                    <div className="border-y-[1px] border-gray-200">
                        <DropdownItem disabled={true}>Team</DropdownItem>
                        <DropdownItem>
                            <div className="flex items-center">
                                <AiOutlineSetting />
                                <span className="ml-2">Settings</span>
                            </div>
                        </DropdownItem>
                    </div>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlineTeam />
                            <span className="ml-2">Invite Collegues</span>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlinePhone />
                            <span className="ml-2">Support</span>
                        </div>
                    </DropdownItem>

                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlinePhone />
                            <span className="ml-2">Support</span>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="flex items-center">
                            <AiOutlinePhone />
                            <span className="ml-2">Support</span>
                        </div>
                    </DropdownItem>
                </DropdownItems>
            </Dropdown>
        </div>
    );
};
