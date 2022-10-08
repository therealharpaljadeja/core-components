import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonVariant } from "../Button/Button";
import Modal from "./Modal";

export default {
    title: "Components/Modal",
    element: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Playground = Template.bind({});
Playground.args = {
    modalButtonProps: {
        label: "Open Dialog",
        variant: ButtonVariant.Secondary,
    },
};
