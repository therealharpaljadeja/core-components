import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { AiFillYoutube } from "react-icons/ai";

export default {
	title: "Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ReusableInput = Template.bind({});
ReusableInput.args = {
	label: "Email",
	disabled: true,
	leftIcon: <AiFillYoutube />,
	error: true,
	errorMessage: "This is a error message.",
};
