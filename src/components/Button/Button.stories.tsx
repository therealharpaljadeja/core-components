import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonSize } from "./Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
	label: "Small",
	size: ButtonSize.sm,
	disabled: true,
	loading: true,
};
