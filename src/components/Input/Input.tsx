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
}

const Input = ({
	label,
	className,
	leftIcon,
	placeholder = "placeholder",
	type = "text",
	...props
}: InputProps): React.ReactElement => {
	return (
		<label className='w-full'>
			{label && (
				<div className='text-gray-700 mb-[6px] font-display'>
					{label}
				</div>
			)}
			<div className='flex items-center'>
				<input
					className={clsx(
						{
							"pl-[45px]": leftIcon,
							"focus:ring-error-200 focus:!border-error-300 border-error-300 pr-[45px]":
								props.error,
						},
						"w-full",
						"font-display",
						"px-[14px] py-[10px]",
						"border-2 border-gray-300 rounded-lg",
						"focus:border-primary-300",
						"focus:ring-2 focus:ring-offset-0 focus:ring-primary-200",
						"disabled:bg-gray-50",
						"outline-none"
					)}
					type={type}
					placeholder={placeholder}
					{...props}
				/>
				<span className='absolute h-5 w-5 flex items-center left-[35px]'>
					{leftIcon}
				</span>
				{props.error && (
					<MdOutlineErrorOutline className='absolute h-5 w-5 right-[35px] text-error-500' />
				)}
			</div>
			{props.hint && (
				<div className='text-gray-500 font-display'>{props.hint}</div>
			)}
			{props.error && props.errorMessage && (
				<div className='text-error-500 font-display'>
					{props.errorMessage}
				</div>
			)}
		</label>
	);
};

export default Input;
