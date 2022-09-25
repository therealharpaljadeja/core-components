import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner, { SpinnerSize } from "./Spinner";

export default {
    title: "Components/Spinner",
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
    <Spinner {...args} />
);

export const Sizes = () => (
    <div className="flex space-x-4">
        <Spinner size={SpinnerSize.sm} />
        <Spinner size={SpinnerSize.md} />
        <Spinner size={SpinnerSize.lg} />
        <Spinner size={SpinnerSize.xl} />
    </div>
);
