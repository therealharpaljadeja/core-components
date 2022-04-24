import "./Button.css";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export enum ButtonVariant {
	Primary = "Primary",
	Secondary = "Secondary",
	Tertiary = "Tertiary",
	Success = "Success",
	Warning = "Warning",
	Error = "Error",
}

export enum ButtonSize {
	sm = "sm",
	md = "md",
	lg = "lg",
	xl = "xl",
	xxl = "xxl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	size: ButtonSize;
	className?: string;
	variant?: ButtonVariant;
	leftIcon?: ReactNode;
}

const Button = ({
	label,
	size = ButtonSize.md,
	className,
	variant = ButtonVariant.Primary,
	leftIcon,
	...props
}: ButtonProps): React.ReactElement => {
	return (
		<button
			className={clsx(
				{
					"px-3.5 py-2": size === ButtonSize.sm,
					"px-4 py-2.5": size === ButtonSize.md,
					"px-5 py-2.5": size === ButtonSize.lg,
					"px-5 py-3": size === ButtonSize.xl,
					"px-7 py-4": size === ButtonSize.xxl,
					"bg-primary-600 text-base-white drop-shadow-[0px_0px_4px_#F4EBFF] hover:bg-primary-700 focus:ring-primary-200 disabled:bg-primary-200":
						variant === ButtonVariant.Primary,
					"bg-primary-50 text-primary-700 hover:bg-primary-100 focus:ring-primary-200 disabled:bg-primary-25 disabled:text-primary-300":
						variant === ButtonVariant.Secondary,
					"bg-base-white border-2 border-gray-300 text-base-black hover:bg-gray-50 focus:ring-gray-100 disabled:bg-base-white disabled:border-gray-200 disabled:text-gray-300":
						variant === ButtonVariant.Tertiary,
					"bg-success-600 text-base-white hover:bg-success-700 focus:ring-success-200 disabled:bg-success-200":
						variant === ButtonVariant.Success,
					"bg-warning-400 text-base-white hover:bg-warning-500 focus:ring-warning-200 disabled:bg-warning-200":
						variant === ButtonVariant.Warning,
					"bg-error-600 text-base-white hover:bg-error-700 focus:ring-error-200 disabled:bg-error-200":
						variant === ButtonVariant.Error,
				},
				"font-body",
				"disabled:drop-shadow-[0px_0px_2px_rgba(16, 24, 40, 0.05)]",
				"focus:ring-offset-0 focus:ring-4 focus:ring-opacity-100",
				"rounded-lg",
				className
			)}
			disabled={props.disabled}>
			{leftIcon}
			<div>{label}</div>
		</button>
	);
};

export default Button;
