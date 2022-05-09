import { ComponentStory, ComponentMeta } from "@storybook/react";
import BadgeGroup from "./BadgeGroup";
import { BsArrowRight } from "react-icons/bs";

export default {
	title: "BadgeGroup",
	component: BadgeGroup,
} as ComponentMeta<typeof BadgeGroup>;

const Template: ComponentStory<typeof BadgeGroup> = (args) => (
	<BadgeGroup {...args} />
);

export const SimpleBadgeGroup = Template.bind({});
SimpleBadgeGroup.args = {};

export const BadgeGroupWithIcon = Template.bind({});
BadgeGroupWithIcon.args = {
	element: <BsArrowRight />,
};
