import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { FiUploadCloud } from "react-icons/fi";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
}

const FileInput = ({ id, disabled }: FileInputProps): React.ReactElement => {
	return (
		<div className={clsx("flex font-display", { "bg-gray-50": disabled })}>
			<label
				htmlFor={id}
				className={clsx(
					{
						"cursor-pointer group": !disabled,
					},
					"flex-1 text-sm"
				)}>
				<div
					className={clsx(
						{
							"border-gray-200 group-hover:border-primary-300 group-hover:bg-primary-25":
								!disabled,
						},
						"border-[1px] rounded-lg flex flex-col space-y-2 items-center p-4"
					)}>
					<div
						className={clsx(
							"w-[40px] h-[40px] bg-gray-100 border-[6px] flex items-center justify-center border-gray-50 rounded-full",
							{
								"group-hover:border-primary-50 group-hover:bg-primary-100":
									!disabled,
							}
						)}>
						<FiUploadCloud
							className={clsx("text-gray-600", {
								"group-hover:text-primary-600": !disabled,
							})}
						/>
					</div>
					<div
						className={clsx("text-gray-500", {
							"group-hover:text-primary-500": !disabled,
						})}>
						<span
							className={clsx(
								"text-gray-300",
								{ "text-primary-500": !disabled },
								"font-medium"
							)}>
							Click to Upload
						</span>{" "}
						or drag and drop
					</div>
					<div
						className={clsx("text-gray-500", {
							"group-hover:text-primary-500": !disabled,
						})}>
						SVG, PNG, JPG or GIF
					</div>
				</div>
				<input
					id={id}
					disabled={disabled}
					type='file'
					className='hidden'
				/>
			</label>
		</div>
	);
};

export default FileInput;
