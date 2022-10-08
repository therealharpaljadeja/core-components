import "./Button.css";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export enum ButtonVariant {
    Primary = "Primary",
    Secondary = "Secondary",
    Tertiary = "Tertiary",
    Link = "Link",
}

export enum ButtonSize {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    size?: ButtonSize;
    className?: string;
    loading?: boolean;
    variant?: ButtonVariant;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    destructive?: boolean;
}

const Button = ({
    label,
    size = ButtonSize.md,
    loading = false,
    className,
    variant = ButtonVariant.Primary,
    leftIcon,
    rightIcon,
    disabled = false,
    destructive = false,
    ...props
}: ButtonProps): React.ReactElement => {
    return (
        <button
            className={clsx(
                {
                    "px-3.5 py-2 text-xs": size === ButtonSize.sm,
                    "px-4 py-2.5 text-sm": size === ButtonSize.md,
                    "px-5 py-2.5 text-base": size === ButtonSize.lg,
                    "px-5 py-3 text-base": size === ButtonSize.xl,
                    "px-7 py-4 text-lg": size === ButtonSize.xxl,
                    "bg-primary-600 text-base-white border-2 border-primary-600 drop-shadow-[0px_0px_4px_#F4EBFF] hover:bg-primary-700 hover:border-primary-700 focus:ring-primary-200":
                        variant === ButtonVariant.Primary &&
                        !destructive &&
                        !disabled &&
                        !loading,
                    "bg-primary-200 text-base-white border-primary-200 hover:bg-primary-200 hover:border-primary-200 focus:ring-0":
                        variant === ButtonVariant.Primary &&
                        !destructive &&
                        (disabled || loading),
                    "bg-primary-50 border-2 border-primary-50 text-primary-700 hover:bg-primary-100 hover:border-primary-100 focus:ring-primary-200":
                        variant === ButtonVariant.Secondary &&
                        !destructive &&
                        !disabled &&
                        !loading,
                    "bg-primary-25 text-primary-300 border-primary-25 hover:bg-primary-25 hover:border-primary-25 focus:ring-0":
                        variant === ButtonVariant.Secondary &&
                        !destructive &&
                        (disabled || loading),
                    "bg-base-white border-2 border-gray-300 text-base-black hover:bg-gray-50 focus:ring-gray-100":
                        variant === ButtonVariant.Tertiary &&
                        !destructive &&
                        !disabled &&
                        !loading,
                    "bg-base-white border-gray-200 text-gray-300 focus:ring-0":
                        variant === ButtonVariant.Tertiary &&
                        !destructive &&
                        (disabled || loading),
                    "disabled:text-gray-300 text-base-black":
                        variant == ButtonVariant.Link && !destructive,
                    "bg-error-600 text-base-white border-2 border-error-600 drop-shadow-[0px_0px_4px_#F4EBFF] hover:bg-error-700 hover:border-error-700 focus:ring-error-200":
                        variant === ButtonVariant.Primary &&
                        destructive &&
                        !disabled &&
                        !loading,
                    "bg-error-200 border-error-200 hover:bg-error-200 hover:border-error-200 focus:ring-0 text-base-white":
                        variant === ButtonVariant.Primary &&
                        destructive &&
                        (disabled || loading),
                    "bg-error-50 border-2 border-error-50 text-error-700 hover:bg-error-100 hover:border-error-100 focus:ring-error-200":
                        variant === ButtonVariant.Secondary &&
                        destructive &&
                        !disabled &&
                        !loading,
                    "bg-error-25 text-error-300 border-error-25 hover:bg-error-25 hover:border-error-25 focus:ring-0":
                        variant === ButtonVariant.Secondary &&
                        destructive &&
                        (disabled || loading),
                    "bg-base-white border-2 border-error-300 !text-error-700 hover:bg-error-50 focus:ring-error-100":
                        variant === ButtonVariant.Tertiary &&
                        destructive &&
                        !disabled &&
                        !loading,
                    "bg-base-white border-error-200 text-error-300 focus:ring-0":
                        variant === ButtonVariant.Tertiary &&
                        destructive &&
                        (disabled || loading),
                    "disabled:text-error-300 text-error-700":
                        variant == ButtonVariant.Link && destructive,
                },
                "font-inter",
                "disabled:drop-shadow-[0px_0px_2px_rgba(16, 24, 40, 0.05)]",
                "focus:ring-offset-0 focus:ring-4 focus:ring-opacity-100",
                "rounded-lg",
                "flex space-x-3 items-center",
                className
            )}
            disabled={disabled}
            {...props}
        >
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div className="flex items-center justify-between w-full">
                    {leftIcon}
                    {label && <div>{label}</div>}
                    {rightIcon}
                </div>
            )}
        </button>
    );
};

export default Button;
