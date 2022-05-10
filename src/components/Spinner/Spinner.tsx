import clsx from "clsx";
import React from "react";

export enum SpinnerSize {
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
					"h-11 w-11 border-8": size === SpinnerSize.md,
					"h-12 w-12 border-8": size === SpinnerSize.lg,
					"h-14 w-14 border-[10px]": size === SpinnerSize.xl,
				},
				"border-primary-100",
				"relative",
				"p-0 m-0",
				"rounded-full"
			)}>
			<svg
				viewBox='0 0 100 100'
				className={clsx(
					{
						"h-11 w-11 left-[-8px] top-[-8px]":
							size === SpinnerSize.md,
						"h-12 w-12 left-[-8px] top-[-8px]":
							size === SpinnerSize.lg,
						"h-14 w-14 left-[-10px] top-[-10px]":
							size === SpinnerSize.xl,
					},
					"absolute box-border "
				)}>
				<circle
					className={clsx(
						"stroke-primary-600",
						"stroke-[12] origin-center animate-spin-fast"
					)}
					cx='50'
					cy='50'
					r={clsx({
						"41":
							size === SpinnerSize.md || size === SpinnerSize.xl,
						"42": size === SpinnerSize.lg,
					})}
					strokeDashoffset='-1000px'
					strokeDasharray='70 400'
					strokeLinecap='round'
					fill='transparent'
				/>
			</svg>
		</div>
	);
};

export default Spinner;
