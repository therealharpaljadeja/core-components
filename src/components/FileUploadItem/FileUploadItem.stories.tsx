import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileUploadItem from "./FileUploadItem";

export default {
    title: "Components/FileUploadItem",
    component: FileUploadItem,
} as ComponentMeta<typeof FileUploadItem>;

const Template: ComponentStory<typeof FileUploadItem> = (args) => (
    <FileUploadItem {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    progress: 40,
};

export const FileUploadInProgress = Template.bind({});
FileUploadInProgress.args = {
    progress: 60,
};

export const FileUploadComplete = Template.bind({});
FileUploadComplete.args = {
    progress: 100,
};

export const FileUploadError = Template.bind({});
FileUploadError.args = {
    error: true,
};
