import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Button, { ButtonProps, ButtonVariant } from "../Button/Button";

interface ButtonGroupProps {
    buttonsInMiddle: number;
    firstButtonConfig: ButtonProps;
    lastButtonConfig: ButtonProps;
    buttonsConfig?: ButtonProps[];
    current?: number;
}

const ButtonGroup = ({
    buttonsInMiddle = 0,
    buttonsConfig,
    firstButtonConfig,
    lastButtonConfig,
    current,
}: ButtonGroupProps) => {
    return (
        <div className="flex">
            <Button
                {...firstButtonConfig}
                variant={ButtonVariant.Tertiary}
                className={clsx("rounded-r-none border-r-0")}
            />
            {buttonsConfig &&
                [...Array(buttonsInMiddle).keys()].map((i) => {
                    return (
                        <Button
                            {...buttonsConfig[i]}
                            variant={
                                i == current
                                    ? ButtonVariant.Primary
                                    : ButtonVariant.Tertiary
                            }
                            key={i}
                            className="border-r-0 rounded-none"
                            label={
                                buttonsConfig[i].label
                                    ? buttonsConfig[i].label
                                    : i.toString()
                            }
                        />
                    );
                })}
            <Button
                {...lastButtonConfig}
                variant={ButtonVariant.Tertiary}
                className="rounded-l-none"
            />
        </div>
    );
};

export default ButtonGroup;
