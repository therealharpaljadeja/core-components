import clsx from "clsx";
import React, { ReactNode } from "react";

export enum BadgeSize {
    sm = "sm",
    md = "md",
    lg = "lg",
}

export enum BadgeVariant {
    Primary = "Primary",
    Tertiary = "Tertiary",
    Success = "Success",
    Warning = "Warning",
    Error = "Error",
}

interface BadgeProps {
    className?: string;
    variant?: BadgeVariant;
    label: string;
    size?: BadgeSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    invertColorScheme?: Boolean;
}

const Badge = ({
    variant = BadgeVariant.Primary,
    label = "Label",
    size = BadgeSize.md,
    leftIcon,
    rightIcon,
    invertColorScheme = true,
}: BadgeProps): React.ReactElement => {
    return (
        <div
            className={clsx(
                {
                    "px-2 py-[2px]": size === BadgeSize.sm,
                    "px-[10px] py-[2px]": size === BadgeSize.md,
                    "px-3 py-1": size === BadgeSize.lg,
                    "bg-primary-50 text-primary-700":
                        variant === BadgeVariant.Primary && !invertColorScheme,
                    "bg-gray-100 text-gray-700":
                        variant === BadgeVariant.Tertiary && !invertColorScheme,
                    "bg-error-50 text-error-700":
                        variant === BadgeVariant.Error && !invertColorScheme,
                    "bg-success-50 text-success-700":
                        variant === BadgeVariant.Success && !invertColorScheme,
                    "bg-warning-50 text-warning-500":
                        variant === BadgeVariant.Warning && !invertColorScheme,
                    "text-primary-50 bg-primary-700":
                        variant === BadgeVariant.Primary && invertColorScheme,
                    "text-gray-100 bg-gray-700":
                        variant === BadgeVariant.Tertiary && invertColorScheme,
                    "text-error-50 bg-error-700":
                        variant === BadgeVariant.Error && invertColorScheme,
                    "text-success-50 bg-success-700":
                        variant === BadgeVariant.Success && invertColorScheme,
                    "text-warning-50 bg-warning-500":
                        variant === BadgeVariant.Warning && invertColorScheme,
                    // "h-14 w-14 border-8": size === SpinnerSize.xl,
                },
                "rounded-[16px]",
                "inline-flex",
                "font-display"
            )}
        >
            <div
                className={clsx(
                    "inline-flex items-center justify-center space-around"
                )}
            >
                {leftIcon && (
                    <span
                        className={clsx(
                            "flex h-2 w-2 items-center justify-center"
                        )}
                    >
                        {leftIcon}
                    </span>
                )}
                <span
                    className={clsx({
                        "text-[12px]": size === BadgeSize.sm,
                        "text-[14px]":
                            size === BadgeSize.md || size === BadgeSize.lg,
                    })}
                >
                    {label}
                </span>
                {rightIcon && (
                    <span
                        className={clsx(
                            "flex h-2 w-2 items-center justify-center"
                        )}
                    >
                        {rightIcon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Badge;
