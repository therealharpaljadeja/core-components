import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { AiOutlineMail } from "react-icons/ai";
import { TypePredicateKind } from "typescript";

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const withLabel = Template.bind({});
withLabel.args = {
    ...Default.args,
    label: "Email",
};

export const withPrefix = Template.bind({});
withPrefix.args = {
    ...Default.args,
    prefix: "https://",
    hint: "Enter URL",
};

export const withLeftIcon = Template.bind({});
withLeftIcon.args = {
    ...withLabel.args,
    leftIcon: <AiOutlineMail />,
};

export const withHint = Template.bind({});
withHint.args = {
    ...withLeftIcon.args,
    hint: "Enter your email address for eg:- hey@gmail.com",
};

export const withErrorMessage = Template.bind({});
withErrorMessage.args = {
    ...withHint.args,
    error: true,
    errorMessage: "Invalid Email Address",
};

export const disabled = Template.bind({});
disabled.args = {
    ...withLabel.args,
    disabled: true,
};

export const Playground = Template.bind({});
Playground.args = {
    label: "Email",
    disabled: true,
    leftIcon: <AiOutlineMail />,
    error: false,
    hint: "This is a hint",
    errorMessage: "This is a error message.",
};
