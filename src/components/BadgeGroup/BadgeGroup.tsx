import clsx from "clsx";
import React, { ReactElement, ReactNode } from "react";
import Badge, { BadgeVariant } from "../Badge/Badge";

interface BadgeGroupProps {
    className?: string;
    variant?: BadgeVariant;
    icon?: ReactNode;
    badgeMessage: string;
    badgeLabel?: string;
}

const BadgeGroup = ({
    variant = BadgeVariant.Primary,
    badgeMessage = "This is a badge message",
    icon,
    badgeLabel,
}: BadgeGroupProps): React.ReactElement => {
    return (
        <div
            className={clsx(
                {
                    "bg-primary-50": variant === BadgeVariant.Primary,
                    "bg-gray-50": variant === BadgeVariant.Tertiary,
                    "bg-error-50": variant === BadgeVariant.Error,
                    "bg-warning-50": variant === BadgeVariant.Warning,
                    "bg-success-50": variant === BadgeVariant.Success,
                },
                "pl-1 pr-[14px] py-1 rounded-[16px] inline-flex space-x-[8px] items-center font-display"
            )}
        >
            <Badge label={badgeLabel} variant={variant} />
            <div
                className={clsx(
                    {
                        "text-primary-700": variant === BadgeVariant.Primary,
                        "text-gray-700": variant === BadgeVariant.Tertiary,
                        "text-error-700": variant === BadgeVariant.Error,
                        "text-warning-500": variant === BadgeVariant.Warning,
                        "text-success-700": variant === BadgeVariant.Success,
                    },
                    "inline-flex items-center"
                )}
            >
                {badgeMessage}
                {icon && <div className="flex flex-1 h-3 w-3 ml-2">{icon}</div>}
            </div>
        </div>
    );
};

export default BadgeGroup;
