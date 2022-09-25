import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileInput from "./FileInput";

export default {
    title: "Components/FileInput",
    component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
    <FileInput {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    id: "imageFile",
    disabled: false,
};

export const disabledState = Template.bind({});
disabledState.args = {
    id: "imageFile",
    disabled: true,
};
