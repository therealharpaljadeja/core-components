import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileUploadItem from "./FileUploadItem";

export default {
	title: "FileUploadItem",
	component: FileUploadItem,
} as ComponentMeta<typeof FileUploadItem>;

const Template: ComponentStory<typeof FileUploadItem> = (args) => (
	<FileUploadItem {...args} />
);
export const FileInputItemInProgress = Template.bind({});
FileInputItemInProgress.args = {
	progress: 60,
};

export const FileInputItemError = Template.bind({});
FileInputItemError.args = {
	error: true,
};
