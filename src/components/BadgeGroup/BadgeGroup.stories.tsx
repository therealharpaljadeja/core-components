import { ComponentStory, ComponentMeta } from "@storybook/react";
import BadgeGroup from "./BadgeGroup";
import Badge, { BadgeVariant } from "../Badge/Badge";
import { AiOutlineArrowRight } from "react-icons/ai";

export default {
    title: "Components/BadgeGroup",
    component: BadgeGroup,
    subcomponents: { Badge },
} as ComponentMeta<typeof BadgeGroup>;

const Template: ComponentStory<typeof BadgeGroup> = (args) => (
    <BadgeGroup {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    icon: <AiOutlineArrowRight />,
    variant: BadgeVariant.Primary,
};

export const Variants = () => (
    <div className="flex flex-col items-start space-y-4">
        <BadgeGroup
            badgeMessage="Primary Badge Group"
            variant={BadgeVariant.Primary}
            icon={<AiOutlineArrowRight />}
        />
        <BadgeGroup
            badgeMessage="Tertiary Badge Group"
            variant={BadgeVariant.Tertiary}
            icon={<AiOutlineArrowRight />}
        />
        <BadgeGroup
            badgeMessage="Success Badge group"
            variant={BadgeVariant.Success}
            icon={<AiOutlineArrowRight />}
        />
        <BadgeGroup
            badgeMessage="Warning Badge Group"
            variant={BadgeVariant.Warning}
            icon={<AiOutlineArrowRight />}
        />
        <BadgeGroup
            badgeLabel="Badge"
            badgeMessage="Error Badge Group"
            variant={BadgeVariant.Error}
            icon={<AiOutlineArrowRight />}
        />
    </div>
);
