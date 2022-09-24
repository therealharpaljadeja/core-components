import React, { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { MdOutlineErrorOutline } from "react-icons/md";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    leftIcon?: ReactNode;
    hint?: string;
    errorMessage?: string;
    error?: boolean;
    prefix?: string;
}

const Input = ({
    label,
    className,
    leftIcon,
    placeholder = "placeholder",
    type = "text",
    prefix,
    ...props
}: InputProps): React.ReactElement => {
    return (
        <label className="w-full">
            {label && (
                <div className="text-gray-700 mb-[6px] font-inter">{label}</div>
            )}
            <div className="flex w-full">
                {prefix && (
                    <span className="rounded-l-lg bg-gray-300 inline-flex items-center px-3 font-inter text-gray-600">
                        {prefix}
                    </span>
                )}
                <div
                    className={clsx(
                        {
                            "!bg-gray-50": props.disabled,
                            "rounded-r-lg": prefix,
                            "rounded-lg": !prefix,
                        },
                        {
                            "focus-within:ring-error-200 focus-within:!border-error-300 border-error-300":
                                props.error,
                        },
                        "flex w-full bg-base-white px-[14px] py-[10px] focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-primary-200 font-inter items-center border-2 border-gray-300  focus-within:border-primary-300"
                    )}
                >
                    <input
                        className={clsx("peer w-full", "outline-none", {
                            "!bg-gray-50": props.disabled,
                        })}
                        type={type}
                        placeholder={placeholder}
                        {...props}
                    />
                    {leftIcon && (
                        <span
                            className={clsx(
                                { "!text-error-400": props.error },
                                "peer-focus:text-primary-400 order-first mr-2 h-5 w-5 flex items-center"
                            )}
                        >
                            {leftIcon}
                        </span>
                    )}
                    {props.error && (
                        <MdOutlineErrorOutline className="h-5 w-5 text-error-500" />
                    )}
                </div>
            </div>
            <div className="mt-[6px]">
                {props.hint && !props.error && (
                    <div className="text-gray-500 font-inter">{props.hint}</div>
                )}
                {props.error && props.errorMessage && (
                    <div className="text-error-500 font-inter">
                        {props.errorMessage}
                    </div>
                )}
            </div>
        </label>
    );
};

export default Input;
