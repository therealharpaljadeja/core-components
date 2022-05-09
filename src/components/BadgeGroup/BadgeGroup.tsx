import clsx from "clsx";
import React, { ReactNode } from "react";
import Badge, { BadgeSize, BadgeVariant } from "../Badge/Badge";

interface BadgeGroupProps {
	className?: string;
	variant: BadgeVariant;
	label: string;
	element?: ReactNode;
	left: Boolean;
	badgeMessage: string;
	badgeLabel: string;
}

const BadgeGroup = ({
	variant = BadgeVariant.Primary,
	badgeMessage = "We've just released a new feature",
	badgeLabel = "New Feature",
	element,
	left = true,
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
				"pl-1 pr-[10px] py-1 rounded-[16px] inline-flex space-x-[8px] items-center font-display"
			)}>
			<Badge
				left={true}
				label={badgeLabel}
				variant={variant}
				size={BadgeSize.md}
				invertColorScheme={true}
			/>
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
				)}>
				{badgeMessage}
				{element && (
					<div className='flex flex-1 h-3 w-3 ml-2'>{element}</div>
				)}
			</div>
		</div>
	);
};

export default BadgeGroup;
