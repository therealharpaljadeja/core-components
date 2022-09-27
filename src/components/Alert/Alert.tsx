import clsx from "clsx";
import React, { ReactNode } from "react";
import { AiFillCloseSquare, AiOutlineClose } from "react-icons/ai";
import Button, { ButtonVariant } from "../Button/Button";

export enum AlertVariants {
    Primary = "Primary",
    Tertiary = "Tertiary",
    Success = "Success",
    Error = "Error",
    Warning = "Warning",
}

interface AlertProps {
    variant?: AlertVariants;
    closeable?: boolean;
    alertIcon?: ReactNode;
    children: ReactNode;
}

const Alert = ({
    closeable = false,
    variant = AlertVariants.Tertiary,
    ...props
}: AlertProps) => {
    return (
        <div
            className={clsx(
                "grid gap-y-2 grid-cols-[auto_1fr_auto]  w-full p-4 border-[1px] rounded-lg",
                {
                    "border-primary-300 text-primary-700 bg-primary-25":
                        variant === AlertVariants.Primary,
                    "border-gray-300 bg-gray-25 text-gray-700":
                        variant === AlertVariants.Tertiary,

                    "border-error-300 bg-error-25 text-error-700":
                        variant === AlertVariants.Error,
                    "border-warning-300 bg-warning-25 text-warning-700":
                        variant === AlertVariants.Warning,
                    "border-success-300 bg-success-25 text-success-700":
                        variant === AlertVariants.Success,
                }
            )}
            {...props}
        >
            <div className="pr-4 order-1">{props.alertIcon}</div>
            <div className="col-span-2 order-last md:order-2 md:col-span-1">
                {props.children}
            </div>
            {closeable && (
                <Button
                    variant={ButtonVariant.Link}
                    leftIcon={<AiOutlineClose />}
                    className={clsx(
                        "order-2 md:order-last justify-end self-start !px-0 !py-0",
                        {
                            "text-gray-500": variant === AlertVariants.Tertiary,
                            "text-primary-500":
                                variant === AlertVariants.Primary,
                            "text-error-500": variant === AlertVariants.Error,
                            "text-warning-500":
                                variant === AlertVariants.Warning,
                            "text-success-500":
                                variant === AlertVariants.Success,
                        }
                    )}
                />
            )}
        </div>
    );
};

export default Alert;
