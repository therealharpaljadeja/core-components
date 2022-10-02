import { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio from "./Radio";

export default {
    title: "Components/Radio",
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

const values = [
    {
        name: "Basic Plan $10/month",
        value: "basic-plan",
        description:
            "Includes up to 10 users, 20GB individual data and access to all features.",
    },
    {
        name: "Business Plan $50/month",
        value: "business-plan",
        description:
            "Includes up to 50 users, 512GB individual data and access to all features.",
    },
];

export const Playground = Template.bind({});
Playground.args = {
    values,
    label: "CPU Plans",
    name: "cpu-plan",
};
