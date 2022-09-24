import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge, { BadgeSize, BadgeVariant } from "./Badge";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default {
    title: "Components/Badge",
    component: Badge,
    argTypes: {
        invertColorScheme: {
            type: "boolean",
        },
    },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const Playground = Template.bind({});
Playground.args = {
    label: "Badge",
    size: BadgeSize.md,
    variant: BadgeVariant.Primary,
    invertColorScheme: false,
};

export const Variants = () => (
    <div className="flex items-center space-x-4">
        <Badge label="Badge" variant={BadgeVariant.Primary} />
        <Badge label="Badge" variant={BadgeVariant.Tertiary} />
        <Badge label="Badge" variant={BadgeVariant.Success} />
        <Badge label="Badge" variant={BadgeVariant.Error} />
        <Badge label="Badge" variant={BadgeVariant.Warning} />
    </div>
);

export const withIcon = () => (
    <div className="flex space-x-4">
        <Badge leftIcon={<AiOutlineArrowLeft />} label="Badge" />
        <Badge rightIcon={<AiOutlineArrowRight />} label="Badge" />
        <Badge
            leftIcon={<AiOutlineArrowLeft />}
            rightIcon={<AiOutlineArrowRight />}
            label="Badge"
        />
    </div>
);

export const withInvertedColorScheme = () => (
    <div className="flex items-center space-x-4">
        <Badge
            label="Badge"
            variant={BadgeVariant.Primary}
            invertColorScheme={false}
        />
        <Badge
            label="Badge"
            variant={BadgeVariant.Tertiary}
            invertColorScheme={false}
        />
        <Badge
            label="Badge"
            variant={BadgeVariant.Success}
            invertColorScheme={false}
        />
        <Badge
            label="Badge"
            variant={BadgeVariant.Error}
            invertColorScheme={false}
        />
        <Badge
            label="Badge"
            variant={BadgeVariant.Warning}
            invertColorScheme={false}
        />
    </div>
);
