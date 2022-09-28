import { ComponentStory } from "@storybook/react";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";

export default {
    title: "Components/Tooltip",
    element: Tooltip,
};

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args} />
);

export const Playground = () => {
    return (
        <Tooltip
            content={
                <div className="flex flex-col">
                    <span className="font-semibold">
                        This is this tooltip title
                    </span>
                    <span className="font-normal">
                        Tooltips are used to describe or identify an element. In
                        most scenarios, tooltips help the user understand
                        meaning, function or alt-text.
                    </span>
                </div>
            }
            className="text-base-white font-semibold font-inter"
            placement="right"
        >
            <Button label="Tooltip Button" />
        </Tooltip>
    );
};
