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
	loading?: boolean;
	variant?: ButtonVariant;
	leftIcon?: ReactNode;
}

const Button = ({
	label,
	size = ButtonSize.md,
	loading = false,
	className,
	variant = ButtonVariant.Primary,
	leftIcon,
	disabled,
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
					"bg-primary-600 text-base-white border-2 border-primary-600 drop-shadow-[0px_0px_4px_#F4EBFF] hover:bg-primary-700 hover:border-primary-700 focus:ring-primary-200":
						variant === ButtonVariant.Primary,
					"bg-primary-200 border-primary-200 hover:bg-primary-200 hover:border-primary-200":
						variant === ButtonVariant.Primary &&
						(disabled || loading),
					"bg-primary-50 border-2 border-primary-50 text-primary-700 hover:bg-primary-100 hover:border-primary-100 focus:ring-primary-200":
						variant === ButtonVariant.Secondary,
					"bg-primary-25 text-primary-300 border-primary-25 hover:bg-primary-25 hover:border-primary-25":
						variant === ButtonVariant.Secondary &&
						(disabled || loading),
					"bg-base-white border-2 border-gray-300 text-base-black hover:bg-gray-50 focus:ring-gray-100":
						variant === ButtonVariant.Tertiary,
					"bg-base-white border-gray-200 text-gray-300":
						variant === ButtonVariant.Tertiary &&
						(disabled || loading),
					"bg-success-600 text-base-white border-2 border-success-600 hover:bg-success-700  hover:border-success-700 focus:ring-success-200":
						variant === ButtonVariant.Success,
					"bg-success-200 border-success-200 hover:bg-success-200 hover:border-success-200":
						variant === ButtonVariant.Success &&
						(disabled || loading),
					"bg-warning-400 text-base-white border-2 border-warning-400 hover:bg-warning-500 hover:border-warning-500 focus:ring-warning-200":
						variant === ButtonVariant.Warning,
					"bg-warning-200 border-warning-200 hover:bg-warning-200 hover:border-warning-200":
						variant === ButtonVariant.Warning &&
						(disabled || loading),
					"bg-error-600 text-base-white border-2 border-error-600 hover:bg-error-700 hover:border-error-700 focus:ring-error-200 ":
						variant === ButtonVariant.Error,
					"bg-error-200 border-error-200 hover:bg-error-200 hover:border-error-200":
						variant === ButtonVariant.Error &&
						(disabled || loading),
				},
				"font-display",
				"disabled:drop-shadow-[0px_0px_2px_rgba(16, 24, 40, 0.05)]",
				"focus:ring-offset-0 focus:ring-4 focus:ring-opacity-100",
				"rounded-lg",
				"flex space-x-3 items-center",
				className
			)}
			disabled={disabled}>
			{loading ? (
				<span>Loading...</span>
			) : (
				<>
					{leftIcon}
					<div>{label}</div>
				</>
			)}
		</button>
	);
};

export default Button;
