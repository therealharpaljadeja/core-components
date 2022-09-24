import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonSize, ButtonVariant } from "./Button";
import { AiOutlineComment } from "react-icons/ai";

export default {
    title: "Components/Button",
    component: Button,
    decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    label: "Playground",
    size: ButtonSize.md,
    destructive: false,
    loading: false,
    variant: ButtonVariant.Primary,
};

export const Sizes = () => (
    <div className="flex space-x-4 items-end justify-start">
        <Button label="Button" size={ButtonSize.sm} />
        <Button label="Button" size={ButtonSize.md} />
        <Button label="Button" size={ButtonSize.lg} />
        <Button label="Button" size={ButtonSize.xl} />
        <Button label="Button" size={ButtonSize.xxl} />
    </div>
);

export const Variants = () => (
    <div className="flex space-x-4 items-end justify-start">
        <Button label="Button" variant={ButtonVariant.Primary} />
        <Button label="Button" variant={ButtonVariant.Secondary} />
        <Button label="Button" variant={ButtonVariant.Tertiary} />
        <Button label="Button" variant={ButtonVariant.Link} />
    </div>
);

export const Destructive = () => (
    <div className="flex space-x-4 items-end justify-start">
        <Button
            label="Button"
            destructive={true}
            variant={ButtonVariant.Primary}
        />
        <Button
            label="Button"
            destructive={true}
            variant={ButtonVariant.Secondary}
        />
        <Button
            label="Button"
            destructive={true}
            variant={ButtonVariant.Tertiary}
        />
        <Button
            label="Button"
            destructive={true}
            variant={ButtonVariant.Link}
        />
    </div>
);

export const withIcon = () => (
    <div className="flex space-x-4">
        <Button label="Button" leftIcon={<AiOutlineComment />} />
        <Button label="Button" rightIcon={<AiOutlineComment />} />
        <Button
            label="Button"
            leftIcon={<AiOutlineComment />}
            rightIcon={<AiOutlineComment />}
        />
    </div>
);
