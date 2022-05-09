import clsx from "clsx";
import React from "react";

export enum SpinnerSize {
	sm = "sm",
	md = "md",
	lg = "lg",
	xl = "xl",
}

export enum SpinnerVariant {
	Primary = "Primary",
	Tertiary = "Tertiary",
	Success = "Success",
	Warning = "Warning",
	Error = "Error",
}

interface SpinnerProps {
	className?: string;
	size?: SpinnerSize;
	variant?: SpinnerVariant;
}

const Spinner = ({
	size = SpinnerSize.md,
	variant = SpinnerVariant.Primary,
}: SpinnerProps): React.ReactElement => {
	return (
		<div
			className={clsx(
				{
					"border-primary-100": variant === SpinnerVariant.Primary,
					"border-base-white": variant === SpinnerVariant.Tertiary,
					"border-success-100": variant === SpinnerVariant.Success,
					"border-warning-100": variant === SpinnerVariant.Warning,
					"border-error-100": variant === SpinnerVariant.Error,
					"h-7 w-7": size === SpinnerSize.sm,
					"h-11 w-11": size === SpinnerSize.md,
					"h-12 w-12": size === SpinnerSize.lg,
					"h-14 w-14": size === SpinnerSize.xl,
				},
				"relative",
				"border-2",
				"p-0 m-0",
				"rounded-full"
			)}>
			<span
				className={clsx(
					{
						"h-7 w-7": size === SpinnerSize.sm,
						"h-11 w-11": size === SpinnerSize.md,
						"h-12 w-12": size === SpinnerSize.lg,
						"h-14 w-14": size === SpinnerSize.xl,
						"border-t-primary-600":
							variant === SpinnerVariant.Primary,
						"border-t-base-black":
							variant === SpinnerVariant.Tertiary,
						"border-t-success-600":
							variant === SpinnerVariant.Success,
						"border-t-warning-400":
							variant === SpinnerVariant.Warning,
						"border-t-error-600": variant === SpinnerVariant.Error,
					},
					"border-[transparent] animate-spin ",
					"absolute box-border ",
					"rounded-full",
					"border-2 left-[-2px] top-[-2px]"
				)}></span>
		</div>
	);
};

export default Spinner;
