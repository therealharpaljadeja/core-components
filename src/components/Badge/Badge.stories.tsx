import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";
import { AiOutlineRight } from "react-icons/ai";

export default {
	title: "Badge",
	component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const SimpleBadge = Template.bind({});
SimpleBadge.args = {};

export const BadgeWithIcon = Template.bind({});
BadgeWithIcon.args = {
	element: <AiOutlineRight />,
};

export const BadgeWithRightIcon = Template.bind({});
BadgeWithRightIcon.args = {
	element: <AiOutlineRight />,
	left: false,
};
