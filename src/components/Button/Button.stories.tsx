import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonSize } from "./Button";
import { AiOutlineComment } from "react-icons/ai";

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    label: "Reusable Button",
    size: ButtonSize.sm,
    disabled: true,
    leftIcon: <AiOutlineComment />,
};

export const SimpleButton = Template.bind({});
SimpleButton.args = {
    label: "Reusable Button",
    size: ButtonSize.sm,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
    label: "Reusable Button",
    size: ButtonSize.sm,
    loading: true,
};
