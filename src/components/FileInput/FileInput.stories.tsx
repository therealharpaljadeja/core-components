import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileInput from "./FileInput";

export default {
	title: "FileInput",
	component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
	<FileInput {...args} />
);

export const SimpleFileInput = Template.bind({});
SimpleFileInput.args = {
	id: "imageFile",
	disabled: true,
};
