import clsx from "clsx";
import React from "react";

export enum SpinnerSize {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
}

interface SpinnerProps {
    className?: string;
    size?: SpinnerSize;
}

const Spinner = ({
    size = SpinnerSize.md,
}: SpinnerProps): React.ReactElement => {
    return (
        <div
            className={clsx(
                {
                    "h-[28px] w-[28px] border-4": size === SpinnerSize.sm,
                    "h-[42px] w-[42px] border-[6px]": size === SpinnerSize.md,
                    "h-[50px] w-[50px] border-[6px]": size === SpinnerSize.lg,
                    "h-[58px] w-[58px] border-8": size === SpinnerSize.xl,
                },
                "border-gray-100",
                "relative",
                "p-0 m-0",
                "rounded-full"
            )}
        >
            <svg
                viewBox="0 0 100 100"
                className={clsx(
                    {
                        "h-[28px] w-[28px] left-[-4px] top-[-4px]":
                            size === SpinnerSize.sm,
                        "h-[42px] w-[42px] left-[-6px] top-[-6px]":
                            size === SpinnerSize.md,
                        "h-[50px] w-[50px] left-[-6px] top-[-6px]":
                            size === SpinnerSize.lg,
                        "h-[58px] w-[58px] left-[-8px] top-[-8px]":
                            size === SpinnerSize.xl,
                    },
                    "absolute box-border",
                    "animate-spin-fast"
                )}
            >
                <circle
                    className={clsx(
                        "stroke-primary-600",
                        "stroke-[8] origin-center",
                        { "stroke-[6]": size === SpinnerSize.sm }
                    )}
                    cx="50"
                    cy="50"
                    r={clsx({
                        "44":
                            size === SpinnerSize.lg || size === SpinnerSize.xl,
                        "43":
                            size === SpinnerSize.sm || size === SpinnerSize.md,
                    })}
                    strokeDashoffset="300"
                    strokeDasharray="90 400"
                    strokeLinecap="round"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default Spinner;
