import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import Spinner, { SpinnerSize } from "../Spinner/Spinner";
import { theme } from "../../../tailwind.config";

interface FileInputItemProps {
	progress: number;
	error: boolean;
	complete: boolean;
}

const backgroundFileItem = {
	backgroundImage: `linear-gradient(to right, ${theme.colors.gray[50]} 70%, transparent 70%`,
};

const FileUploadItem = ({
	progress,
	error,
	complete,
}: FileInputItemProps): React.ReactElement => {
	return (
		<div
			className={clsx(
				{
					"border-gray-200": !error,
					"border-error-300 bg-error-25": error,
				},
				`flex font-display flex-1 border-[1px] rounded-[8px] p-[18px]`
			)}
			style={
				!error
					? {
							backgroundImage: `linear-gradient(to right, ${theme.colors.gray[50]} ${progress}%, transparent ${progress}%`,
					  }
					: {}
			}>
			<div className={clsx("flex-1 flex space-x-4")}>
				<div className='items-start  flex'>
					<div
						className={clsx(
							{
								"bg-primary-100 text-primary-600 border-primary-50":
									!error,
								"bg-error-100 text-error-600 border-error-50":
									error,
							},
							" h-8 w-8 flex justify-center items-center rounded-full box-content  border-[4px]"
						)}>
						<FiUploadCloud />
					</div>
				</div>
				<div className={clsx("flex-col")}>
					<div
						className={clsx(
							{
								"text-gray-700": !error,
								"text-error-700": error,
							},
							"font-medium"
						)}>
						Tech Design Requirements.pdf
					</div>
					<div
						className={clsx({
							"text-gray-500": !error,
							"text-error-500": error,
						})}>
						200 KB - {progress}% Uploaded
					</div>
					{error && (
						<div
							className={clsx({
								"text-error-700": error,
							})}>
							Try Again
						</div>
					)}
				</div>
			</div>
			<div className='flex items-center'>
				{error ? (
					<div className='text-error-600 h-8 w-8 flex items-center justify-center'>
						<FiTrash2 />
					</div>
				) : (
					<Spinner size={SpinnerSize.sm} />
				)}
			</div>
		</div>
	);
};

export default FileUploadItem;
