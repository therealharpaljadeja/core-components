import { ComponentStory } from "@storybook/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Alert, { AlertVariants } from "./Alert";

export default {
    title: "Components/Alert",
    component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

const AlertContent = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-sm font-semibold">
                We just released a new feature
            </h2>
            <p className="font-normal">
                knlasd aklsdnak kalsdalsk klasmdal klamsda klamsdal
            </p>
        </div>
    );
};

export const Playground = Template.bind({});
Playground.args = {
    alertIcon: <AiOutlineInfoCircle />,
    children: <AlertContent />,
    closeable: true,
};

export const CloseableVariants = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Alert
                variant={AlertVariants.Primary}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={Playground.args?.closeable}
            />
            <Alert
                variant={AlertVariants.Tertiary}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={Playground.args?.closeable}
            />
            <Alert
                variant={AlertVariants.Error}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={Playground.args?.closeable}
            />
            <Alert
                variant={AlertVariants.Success}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={Playground.args?.closeable}
            />
            <Alert
                variant={AlertVariants.Warning}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={Playground.args?.closeable}
            />
        </div>
    );
};

export const NonCloseableVariants = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Alert
                variant={AlertVariants.Primary}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={false}
            />
            <Alert
                variant={AlertVariants.Tertiary}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={false}
            />
            <Alert
                variant={AlertVariants.Error}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={false}
            />
            <Alert
                variant={AlertVariants.Success}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={false}
            />
            <Alert
                variant={AlertVariants.Warning}
                alertIcon={Playground.args?.alertIcon}
                children={Playground.args?.children}
                closeable={false}
            />
        </div>
    );
};
