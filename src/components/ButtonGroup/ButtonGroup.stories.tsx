import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ButtonGroup from "./ButtonGroup";

export default {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <ButtonGroup {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
    firstButtonConfig: {
        label: "Prev",
        leftIcon: <AiOutlineArrowLeft />,
    },
    lastButtonConfig: {
        label: "Next",
        rightIcon: <AiOutlineArrowRight />,
    },
    buttonsConfig: [...Array(10).keys()].map((i) => {
        return { label: (i + 1).toString() };
    }),
    buttonsInMiddle: 10,
    current: 5,
};

export const only2Buttons = Template.bind({});
only2Buttons.args = {
    firstButtonConfig: {
        label: "Prev",
        leftIcon: <AiOutlineArrowLeft />,
    },
    lastButtonConfig: {
        label: "Next",
        rightIcon: <AiOutlineArrowRight />,
    },
};

export const withButtonsInMiddle = Template.bind({});
withButtonsInMiddle.args = {
    ...Playground.args,
};
